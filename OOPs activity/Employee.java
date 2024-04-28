public class Employee {
    int id;
    String name;
    String designation;
    String email;
    long phone;
    String address;

    public Employee(int id, String name, String designation, String email, long phone, String address) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    public void display() {
        System.out.println("Employee ID: " + id);
        System.out.println("Employee Name: " + name);
        System.out.println("Designation: " + designation);
        System.out.println("Email: " + email);
        System.out.println("Phone Number: " + phone);
        System.out.println("Address: " + address);
        System.out.println("");   
    }

    public static void main(String[] args) {
        Employee empployee1 = new Employee(11, "kumar", "Tester", "kumar@gmail.com", 8967453782, "RAJA STREET", "Chennai");
       empployee1.display();
        Employee empployee2 = new Employee(12, "mani", "trainer", "mani@gmail.com", 6784659367, "rAILWAY ROAD", "Trichy");
        empployee2.display();
      
    }
}
