#include<iostream>
using namespace std;

int main(){
    cout<<"Enter 1 for addition"<<endl;
    cout<<"Enter 2 for subtraction"<<endl;
    cout<<"Enter 3 for multiplication"<<endl;
    cout<<"Enter 4 for division"<<endl;
    cout<<"Enter 5 to exit"<<endl;
    int a;cin>>a;
    if(a==5) return 0;
    cout<<"Enter 2 numbers"<<endl;
    int x,y;cin>>x>>y;
    if(a==1) cout<<x+y;
    else if(a==2) cout<<x-y;
    else if(a==3) cout<<x*y;
    else if(a==4) cout<<x/y;
    else cout<<"Wromg input";
}

    