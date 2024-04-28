// Parent class
class Employee {
    String name;
    String designation;

    public Employee(String name, String designation) {
        this.name = name;
        this.designation = designation;
    }

  //display employee information
    public void display() {
        System.out.println("Name: " + name);
        System.out.println("Designation: " + designation);
    }
}

// Single Inheritance  Manager class inheriting  Employee 
class Manager extends Employee {
    String department;

    public Manager(String name, String designation, String department) {
        super(name, designation);
        this.department = department;
    }

    //  display manager information
    public void displayManagerInfo() {
        super.display();
        System.out.println("Department: " + department);
    }
}

//Multilevel Inheritance - Developer inheriting from Employee (
class Developer extends Manager {
    String programmingLanguage;

    public Developer(String name, String designation, String department, String programmingLanguage) {
        super(name, designation, department);
        this.programmingLanguage = programmingLanguage;
    }

    public void displayDeveloperInfo() {
        super.displayManagerInfo();
        System.out.println("Programming Language: " + programmingLanguage);
    }
}

// Hierarchical Inheritance-Tester class inheriting from Employee (
class Tester extends Employee {
    String testingTool;

    public Tester(String name, String designation, String testingTool) {
        super(name, designation);
        this.testingTool = testingTool;
    }

    public void displayTesterInfo() {
        super.display();
        System.out.println("Testing Tool: " + testingTool);
    }
}

public class EmployeeInheritance {
    public static void main(String[] args) {
        // Creating a manager
        Manager manager = new Manager("John", "Manager", "HR");
        System.out.println("Manager Details:");
        manager.displayManagerInfo();
        System.out.println();

        // Creating a developer
        Developer developer = new Developer("vijay", "Developer", "Engineering", "Java");
        System.out.println("Developer Details:");
        developer.displayDeveloperInfo();
        System.out.println();

    }
}
