#ifndef AD7124_H
#define AD7124_H

#include "mbed.h"

#define low 0
#define hight 1

/* Communication Register bits */
#define COMM_REG_WEN    0x00
#define COMM_REG_WR     0x00
#define COMM_REG_RD     0x40

class AD7124
{
public:    
    
    enum Registername
    {
        Status_Reg = 0x00,
        ADC_Control_Reg,
        Data_Reg,
        IOCon1_Reg,
        IOCon2_Reg,
        ID_Reg,
        Error_Reg,
        Error_En_Reg,
        Mclk_Count_Reg
    };
    
    AD7124(PinName mosi, PinName miso, PinName sck, PinName ss);
    ~AD7124();
    
    int write(char data);
    
    int ReadId();
    
    double ReadData();
    
    uint32_t ReadDataBit();
    
    int ADC_Control(unsigned int Pwr_Mod, unsigned int Mode, char Clk_Sel=0x00,
        bool Dout_Rdy_Del=false, bool Cont_Read=false, bool Data_Status=false,
        bool CS_En=false, bool Ref_En=false );
    
    int ADC_Channel(unsigned int channel, unsigned int ainp, unsigned int ainm);
    
    int ADC_Config(unsigned int config_number, bool bipolar = true, unsigned int refsel = 0, unsigned int PGA = 0);
    
    void ADC_Reset();
    
private:
    SPI _spi;
    DigitalOut _cs;
    char comm_buff;
};

#endif