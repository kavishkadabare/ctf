import java.util.Scanner;

  class Test{

       public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        String input = s.next();

        System.out.println(flag.length());
        System.out.println(change2(change1(flag)));
        if(input.length() != 27)
        {
            System.out.println("Doesn't match character limit");

        }
        else
        {
            String solution = change2(change1(input));
            if(solution.equals("Z-nwap`.xb?opel:]QobD{DdB0g"))
                System.out.println("The flag is: " + input);
            else
            {
                System.out.println("Wrong! Try again!");

            }
        }
    }
    public static String change1(String w)
    {
        int[] vary = {4, 3, 5, 6, 1, 2, 3, 3, 1,4, 3, 5, 6, 1, 2, 3, 3, 1, 4, 3, 5, 6, 1, 2, 3, 3, 1};
        char[] temp = new char[27];
        for(int i = 0; i < 27; i++)
        {
            temp[i] = (char)(w.charAt(i) + vary[i]);
        }
        return new String(temp);
    }
    public static String change2(String w)
    {
        int[] vary = {1, 7, 5, 3, 5, 4, 2, 6, 3, 1, 7, 5, 3, 5, 4, 2, 5, 3, 1, 7, 5, 3, 5, 4, 2, 6, 3};
        char[] temp = new char[27];
        for(int i = 0; i < 27; i++)
        {
            temp[i] = (char)(w.charAt(i) - vary[i]);
        }
        return new String(temp);
    }
  }
