/***********************************************************************
* Program: 
*    Assignment 21, DEBUGGING
*    Brother Price, CS124
* Author:
*    Jacob Pickrell
* Summary: 
*   This program will focus on learning how to read structure charts and applying the 
*   logic to futrue assignments and codes. This one only asks for fuctions and returning 
*   displays of the results.
*
*    Estimated:  0.5 hrs   
*    Actual:     1.0 hrs
*      Please describe briefly what was the most difficult part.
************************************************************************/

#include <iostream>
using namespace std;


float promptDevalue()
{
    float cost = 0;
    return cost;
}
float promptInsurance()
{
float cost = 0;
    return cost;
}
float promptParking()
{
    float cost = 0;
    return cost;
}
float promptMileage()
{
    float mileage = 0;
    return mileage;
}
float promptGas()
{
    float cost = 0;
    return cost;
}
float promptRepairs()
{
    float cost = 0;
    return cost;
}
float promptTires()
{
    float cost = 0;
    return cost;
}

//************************
float getPeriodicCost()
{
    float cost = promptDevalue() + promptInsurance() + promptParking();
    float costPeriodic = 0;
    
    return costPeriodic;
}
//************************
float getUsageCost()
{
    
    float cost = promptTires() + promptRepairs() + promptGas();
    float milage = promptMileage();
    float costUsage = cost / milage;
    return costUsage;
}

//************************
void display(float costUsage, float costPeriodic)
{
    cout << "Success\n";
    return;
}

/**********************************************************************
 * Main is used to call on our fuctions and simply help the display appear.
 ***********************************************************************/
int main()
{
float costUsage = getUsageCost();
float costPeriodic = getPeriodicCost();
display(costUsage, costPeriodic);

   return 0;
}
