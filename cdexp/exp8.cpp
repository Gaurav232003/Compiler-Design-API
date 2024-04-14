#include <iostream>
#include <stack>
#include <string>
#include <sstream>

// Function to perform arithmetic operations
int performOperation(int a, int b, char op) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default:  throw std::invalid_argument("Invalid operator");
    }
}

// Function to evaluate postfix expression
int evaluatePostfix(const std::string &postfix) {
    std::stack<int> s;
    std::istringstream iss(postfix);
    int a, b;
    char op;

    while (iss >> op) {
        if (op >= '0' && op <= '9') {
            s.push(op - '0');
        } else {
            if (s.size() < 2) {
                throw std::invalid_argument("Invalid postfix expression");
            }
            b = s.top(); s.pop();
            a = s.top(); s.pop();
            s.push(performOperation(a, b, op));
        }
    }

    if (s.size() != 1) {
        throw std::invalid_argument("Invalid postfix expression");
    }

    return s.top();
}

int main() {
    std::string postfix;
    std::cout << "Enter postfix expression: ";
    std::cin >> postfix;
    try {
        int result = evaluatePostfix(postfix);
        std::cout << "Result: " << result << std::endl;
    } catch (const std::invalid_argument &e) {
        std::cout << "Error: " << e.what() << std::endl;
    }
    return 0;
}