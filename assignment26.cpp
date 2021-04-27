/***********************************************************************
* Program:
*    Assignment 26, (e.g. Assignment 10, Hello World)
*    Brother Price, CS124
* Author:
*    Jacob Pickrell
* Summary: 
*    This program is using a different kind of call fuction to grab a file and 
      display the average of the grades. We are also fullproffing the program to spit out error 
      messages to any possible errors.
*
*    Estimated:  1.0 hrs   
*    Actual:     1.5 hrs
*      Please describe briefly what was the most difficult part.
************************************************************************/

#include <iostream>
#include<iomanip>
#include<fstream>
using namespace std;

/**********************************************************************
 * Main calls filenames and helps direct the flow of logic. 
 ***********************************************************************/
void getFileName(char fileName[])
{
   cout << "Please enter the filename: " ;
   cin >> fileName;

}


float readFile(char fileName[])
{
   ifstream fin(fileName);
   if (fin.fail())
   {
      cout << "Error reading file \"" << fileName <<  "\""<< endl;
      return -1;
   }
   
   //no output 
   int data = 0;
   float sum = 0;
   int count = 0;
   float average = 0;
   int total = 0;

   while (fin >> data)
   {
   
      sum += data;
      // cout << sum << endl;
      count++;
      
   }
   if (count != 10)
      {
         average = -2;
         cout << "Error reading file \"" << fileName <<  "\""<< endl;
      }
   else 
   {
      average = sum / count;
      total = average; 
      average = average - total;
      // cout << average << endl << "check 1"; 

      if (average > 0.5)
         return (total + 1);
   }

   fin.close();

   
   return average;
}



void displayTable(float average)
{
   if (average == -1) 
      cout << "No output";
   else 
      cout << "Average Grade: " << average << "%" << endl;
}

int main()
{
   char fileName[56];
   
   getFileName(fileName);
   
   int average = readFile(fileName); 

   if (average != -2)
      displayTable(average);

   return 0;
}