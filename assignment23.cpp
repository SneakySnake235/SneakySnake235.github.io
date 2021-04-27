/***********************************************************************
* Program:
*    Assignment 23,   (e.g. Assignment 10, Hello World)
*    Brother Price, CS124
* Author:
*    Jacob Pickrell
* Summary: 
*    The point of this program is to become more familiar with While Loops.
*    Our goal is to add and count out input numbers. It then stops before going past 100
*
*    Estimated:  1.0 hrs   
*    Actual:     1.3 hrs
*      Please describe briefly what was the most difficult part.
*      Learning how Loops work with not much experience. 
************************************************************************/

#include <iostream>
using namespace std;

/**********************************************************************
 * Main simply starts a chain of comands that goes and calls the function computeSum
 * and compute sum calls on getInput to grab our needed input and 
 * cout messages before displaying them.
 ***********************************************************************/

double getInput()
{
   double input;
   cout << "What multiples are we adding? ";
   cin >> input;
   cout << "The sum of multiples of " << input << " less than 100 are: ";
   return input;
}


double computeSum()
{

double input = getInput();

double count = 0;

double total = 0;

while ( input * count < 100 )

	total += input * count++ ;

return total;

}

int main()
{

   cout << computeSum() << endl;
   
   return 0;
}
