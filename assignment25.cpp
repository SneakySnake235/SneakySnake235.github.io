/***********************************************************************
* Program:
*    Assignment 25 ,    (e.g. Assignment 10, Hello World)
*    Brother Price, CS124
* Author:
*    Jacob Pickrell
* Summary: 
*   The point of the program is to carefully construct a pattern that looks like a
*   calender. We will use algorithms to define and shape the text.
*   The main calls on the user for input (numDays and offSet)
*
*    Estimated:  1.0 hrs   
*    Actual:     1.5 hrs
*      Please describe briefly what was the most difficult part.
************************************************************************/

#include <iostream>
#include <iomanip>
using namespace std;

/**********************************************************************
 * Main calls on the display and asks the user for Input. The input is the numDays
 * And the offSet. The display being called goes through and returns our input into a 
 * Calender like body of text. 
 ***********************************************************************/

void displayTable(int numDays, int offSet)
{
   int numSpace = (offSet +1) * 4 ;
   offSet++;
   int count = 0;


   cout << "  Su  Mo  Tu  We  Th  Fr  Sa" << endl;
   if (offSet != 7) 
      cout << setw(numSpace) << " ";
   for (int day = 1; day <= numDays; day++)
   {
      cout << setw(4) << day; 

         if (((offSet + day) % 7) == 0)
            cout << endl;


      count = day;
   }
   if (((offSet + count) % 7) != 0)
         cout << endl;

      // if (offSet + day == 7 )
      //    cout << endl;


      // else if (offSet + day == 14 )
      //    cout << endl;

      
      // else if (offSet + day == 21 )
      //    cout << endl;
         
         
      // else if (offSet + day == 28 )
      //    cout << endl;
}

int main()
{
   int numDays = 0;

   int offSet = 0;

   cout << "Number of days: ";
   cin >> numDays; 
   cout << "Offset: ";
   cin >> offSet;
   displayTable(numDays,offSet); 
   return 0;
}

