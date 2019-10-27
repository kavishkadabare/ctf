#include <iostream>
#include <stdexcept>      
#include <vector> 
#include <memory>
//#include <cpr.h>
using namespace std;

int func(signed int s_a, signed int s_b) {
  signed long result;
  if (s_b < 0 || s_a < 0){
	cout<<"Error?";
  } else {
    try{
		result = s_a + s_b;
		//http_client client("http://localhost:8080/api/valid?ein="+to_string(s_a)+"&zwei="+to_string(s_b)+"&drei="+to_string(result)); 
		//http_response response; // ordinary `get` request 
		//response = client.request(methods::GET, "/get").get(); 
		//std::cout << response.extract_string().get() << "\n";
		//std::cout << cpr::Get(Url{"http://localhost:8080/api/valid?ein="+to_string(s_a)+"&zwei="+to_string(s_b)+"&drei="+to_string(result)});
		return result;
	}catch(exception e){
		
		cout<<"Is Error";
	}
	cout<<result;
  }
  
  /* ... */
}

void func2(int k){
	
	vector<int> punch_vector(20);
	try {
    punch_vector.at(k)=100;
	}
	catch (const std::out_of_range& oor) {
	cout<<"Help";
	} 
	
	
}

void func3 (int z, int y){
	
	shared_ptr<int> p1(new int(z));
    weak_ptr<int> wp(p1);
	shared_ptr<int> p3(new int(y));
	weak_ptr<int> wp1(p3);
    p1.reset();
    try {
		shared_ptr<int> p2(wp);
    } catch(const std::bad_weak_ptr& e) {
        cout <<"Flag?" << '\n';
    }
}





int main()
{
	unsigned int i, j;
	cout<<"Enter Num 1: ";
	cin>>i;
	cout<<"Enter Num 2: ";
	cin>>j;
	cout<<func(i,j);
	func2(i);
	func3(i,j);
		
	

    return 0;
}

//http://localhost:8080/api/valid?ein=2147483647&zwei=2147483646&drei=-3
//Output must be -3HelpFlag? 