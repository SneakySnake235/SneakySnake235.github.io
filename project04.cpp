/***********************************************************************
* Program:
*    Project 04          (e.g. Assignment 10, Hello World)
*    Brother Price, CS124
* Author:
*    Jacob Pickrell
* Summary:
*
*   Write a program to manage your personal finances for a month. This program will ask you
*   for your budget income and expenditures, then for how much you actually made and spent.
*   The program will then display a report of whether you are on target to meet your financial goals.
*
*       Finish this weeks assignment of making a working table that takes imputs and also calculates
*       taxes and tithing. 
*   
*   
*    Estimated:  1.5 hrs   
*    Actual:     1.5 hrs
*      Please describe briefly what was the most difficult part.
*       The most difficult part was knowing how to add everything together and how to get it to run with tweeked
*        programs from older assignments. On top of making sure it all actually works with testbed.

************************************************************************/

#include <iostream>
#include <iomanip>

using namespace std;

/**********************************************************************
 *Begin working on Project 2 and lay the basework so its ready for next week when we make more improvements to it. 
 *
 ***********************************************************************/
double getIncome()
{
double tempIncome;
cout << "\tYour monthly income: ";
cin >> tempIncome;
return tempIncome;
}

double getBudget()
{
double tempBudget;
cout << "\tYour budgeted living expenses: ";
cin >> tempBudget;
return tempBudget;
}

double getlivingActual()
{
double tempLivingActual;
cout << "\tYour actual living expenses: ";
cin >> tempLivingActual;
return tempLivingActual;
}

double getTaxes()
{
double tempTaxes;
cout << "\tYour actual taxes withheld: ";
cin >> tempTaxes;
return tempTaxes;
}
double getTith()
{
double tempTith;
cout << "\tYour actual tithe offerings: ";
cin >> tempTith;
return tempTith;
}

double getOther()
{
double tempOther;
cout << "\tYour actual other expenses: ";
cin >> tempOther;
return tempOther;
}

double getDiff()
{
return 0;
}

double computeTithing(double income)
{
   return (income * 0.1);
}

double computeTax(double income)
{
     double yearIncome = income *12 ; 
     double yearTax;
     
   if (yearIncome <= 15100)
          yearTax = yearIncome * 0.10;

   else if (yearIncome > 15100 && yearIncome <= 61300)
          yearTax = 1510 + 0.15 *(yearIncome - 15100);
   //yearlyTax ← $1,510 + 0.15 *(yearlyIncome - $15,100)

   else if (yearIncome > 61300 && yearIncome <= 123700)
       yearTax = 8440 + 0.25 *(yearIncome - 61300);
   //yearlyT$8,440 + 0.25 *(yearlyIncome - $61,300)

   else	if (yearIncome > 123700 && yearIncome <= 188450)
       yearTax = 24040 + 0.28 *(yearIncome - 123700);
//yearlyTax ← $24,040 + 0.28 *(yearlyIncome - $123,700)

   else	if (yearIncome > 188450 && yearIncome <= 336550)
      yearTax = 42170 + 0.33 *(yearIncome - 188450);
//yearlyTax ← $42,170 + 0.33 *(yearlyIncome - $188,450)

   else if (yearIncome > 336550)
       yearTax = 91043 + 0.35 *(yearIncome - 336550);
//yearlyTax ← $91,043 + 0.35 *(yearlyIncome - $336,550)
   //     yearTax = ;


   double monthTax = yearTax /12 ;

   return monthTax;
   
}

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

void display(double income, double aLiving, double bLiving, double aTax, double aTith, double aOther)
{
   double bTax = computeTax(income);
   double bTith = computeTithing(income);
   double bOther = income - bTax - bTith - bLiving;
   double aDifference = income - aTax - aTith - aLiving - aOther;
   double bDifference = 0;
   

   // if B is in front of a word its Budget , and A is for Actual 
cout << "\n";
cout << "The following is a report on your monthly expenses" << endl;
cout << "\tItem                  Budget          Actual\n"
<< "\t=============== =============== ===============\n"
     << "\tIncome" << setw(11) << "$" << setw(11) << income << setw(5) << "$" << setw(11) << income << endl
     << "\tTaxes" << setw(12) << "$" << setw(11) << bTax << setw(5) << "$" << setw(11) << aTax << endl
     << "\tTithing" << setw(10) << "$" << setw(11) << bTith << setw(5) << "$" << setw(11) << aTith << endl
     << "\tLiving" << setw(11) << "$" << setw(11) << bLiving << setw(5) << "$" << setw(11) << aLiving << endl
     << "\tOther" << setw(12) << "$" << setw(11) << bOther << setw(5) << "$" << setw(11)<< aOther << endl
<< "\t=============== =============== ===============\n"
     << "\tDifference"<< setw(7) << "$" << setw(11) << bDifference << setw(5) << "$" << setw(11) << aDifference << endl ;

return ;
}

/**********************************************************************
*Begin working on Project 4 and lay the basework so its ready for next 
 week when we make more improvements to it.
***********************************************************************/
int main()
{
   cout.setf(ios::fixed);
   cout.setf(ios::showpoint);
   cout.precision(2);
   //***********************


   cout << "This program keeps track of your monthly budget\n"
      << "Please enter the following:\n" ;
   //******************************************************

   float income = getIncome();
   //
   float budget = getBudget();
   //
   float living = getlivingActual();
   //
   float taxes = getTaxes();
   //
   float tith = getTith();
   //
   float other = getOther();

   //**** Stick it in a Function called Display vvvvv
   display(income, living, budget, taxes, tith, other);
   // display(income,x,y,z);
   return 0;
}


