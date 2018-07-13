#include "mbed.h"
#include "AD7124.h"

extern Serial dbg;

AD7124::AD7124(PinName mosi, PinName miso, PinName sck, PinName ss): _spi(mosi, miso, sck), _cs(ss)
{
    _cs = 1;
    _spi.format(8, 3);
//    _spi.frequency(1000000);
}

AD7124::~AD7124()
{
    
}

int AD7124::write(char data)
{
    int ret = _spi.write(data);
    return ret;
}

int AD7124::ReadId()
{
    comm_buff = comm_buff | COMM_REG_WEN;
    comm_buff = comm_buff | COMM_REG_RD;
    comm_buff = comm_buff | ID_Reg;
    
    _spi.format(8, 3);
    _cs = 0;
    _spi.write(comm_buff);
    int ret = _spi.write(0x00); 
    _cs = 1;
    comm_buff = 0x00;
    
    return ret;
}

void AD7124::ADC_Reset()
{
    char send[8] = {0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF};
    
    _cs = 0;
    for(int i=0; i<8; i++)
    {
        _spi.write(send[i]);
    }
    _cs = 1;
}

int AD7124::ADC_Control(unsigned int Pwr_Mod, unsigned int Mode, char Clk_Sel,
                        bool Dout_Rdy_Del, bool Cont_Read, bool Data_Status,
                        bool CS_En, bool Ref_En)
{
    comm_buff = comm_buff | COMM_REG_WEN;
    comm_buff = comm_buff | COMM_REG_WR;
    comm_buff = comm_buff | ADC_Control_Reg;
    
    uint16_t data = 0x0000;
    if(Dout_Rdy_Del) data = data | (1 << 12);
    if(Cont_Read) data = data | (1 << 11);
    if(Data_Status) data = data | (1 << 10);
    if(CS_En) data = data | (1 << 9);
    if(Ref_En) data = data | (1 << 8);
    
    data = data | (Pwr_Mod << 6);
    data = data | (Mode << 2);
    data = data | Clk_Sel;
    
    char send[3];
    send[0] = (data >> 8) & 0xFF;
    send[1] = data & 0xFF;
    
    _cs = 0;
    _spi.write(comm_buff);
    _spi.write(send[0]);
    _spi.write(send[1]);
    _cs = 1;
    comm_buff = 0x00;
    
    comm_buff = comm_buff | COMM_REG_WEN;
    comm_buff = comm_buff | COMM_REG_RD;
    comm_buff = comm_buff | ADC_Control_Reg;
    
    _cs = 0;
    _spi.write(comm_buff);
    int buff[2];
    buff[0] = _spi.write(0x00); 
    buff[1] = _spi.write(0x00); 
    _cs = 1;
    comm_buff = 0x00;
    
    int ret = (buff[0]*256) + buff[1];
    
    return ret;
}

double AD7124::ReadData()
{
    comm_buff = comm_buff | COMM_REG_WEN;
    comm_buff = comm_buff | COMM_REG_RD;
    comm_buff = comm_buff | Data_Reg;
    
    _cs = 0;
    _spi.write(comm_buff);
    
    char buf[4];
    for(int i=0; i<3; i++)
    {
        buf[i] = _spi.write(0x00);
    }
    _cs = 1;
    comm_buff = 0x00;
    
    long code = (buf[0]*65536) + (buf[1]*256) + buf[2];
//    double val = ((code * 2.5)/8388607) - 2.5;
    float val = (code * 0.0000003592) - 3.0283;
    
    return val;
}

uint32_t AD7124::ReadDataBit()
{
    comm_buff = comm_buff | COMM_REG_WEN;
    comm_buff = comm_buff | COMM_REG_RD;
    comm_buff = comm_buff | Data_Reg;
    
    _cs = 0;
    _spi.write(comm_buff);
    
    char buf[4];
    for(int i=0; i<3; i++)
    {
        buf[i] = _spi.write(0x00);
    }
    _cs = 1;
    comm_buff = 0x00;
    
    uint32_t code = (buf[0]*65536) + (buf[1]*256) + buf[2];
    
    return code;
}

int AD7124::ADC_Channel(unsigned int channel, unsigned int ainp, unsigned int ainm)
{
    comm_buff = 0x00;
    comm_buff = comm_buff | COMM_REG_WEN;
    comm_buff = comm_buff | COMM_REG_WR;
    comm_buff = comm_buff | channel;
    
    uint16_t data = 0x8000;
    data = data | (ainp << 5);
    data = data | (ainm);
    
    char send[3];
    send[0] = (data >> 8) & 0xFF;
    send[1] = data & 0xFF;
    
    _cs = 0;
    _spi.write(comm_buff);
    _spi.write(send[0]);
    _spi.write(send[1]);
    _cs = 1;
    comm_buff = 0x00;
    
    comm_buff = comm_buff | COMM_REG_WEN;
    comm_buff = comm_buff | COMM_REG_RD;
    comm_buff = comm_buff | channel;
    
    _cs = 0;
    _spi.write(comm_buff);
    int buff[2];
    buff[0] = _spi.write(0x00); 
    buff[1] = _spi.write(0x00); 
    _cs = 1;
    comm_buff = 0x00;
    
    int ret = (buff[0]*256) + buff[1];
    
    return ret;
}

int AD7124::ADC_Config(unsigned int config_number, bool bipolar, unsigned int refsel, unsigned int PGA)
{
    comm_buff = 0x00;
    comm_buff = comm_buff | COMM_REG_WEN;
    comm_buff = comm_buff | COMM_REG_WR;
    comm_buff = comm_buff | config_number;
    
    uint16_t data = 0x0060;
    if(bipolar)
    {
        data = data | (1 << 11);
    }
    
    data = data | (refsel << 3);
    data = data | PGA ;
    
    //dbg.printf("buff = %4X, data = %4X\r\n",comm_buff, data);
    
    char send[3];
    send[0] = (data >> 8) & 0xFF;
    send[1] = data & 0xFF;
    
    _cs = 0;
    _spi.write(comm_buff);
    _spi.write(send[0]);
    _spi.write(send[1]);
    _cs = 1;
    comm_buff = 0x00;
    
    comm_buff = comm_buff | COMM_REG_WEN;
    comm_buff = comm_buff | COMM_REG_RD;
    comm_buff = comm_buff | config_number;
    
    _cs = 0;
    _spi.write(comm_buff);
    int buff[2];
    buff[0] = _spi.write(0x00); 
    buff[1] = _spi.write(0x00); 
    _cs = 1;
    comm_buff = 0x00;
    
    int ret = (buff[0]*256) + buff[1];
    
    return ret;
}