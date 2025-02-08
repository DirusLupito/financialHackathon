package UI;

import javax.swing.JFrame;

/**
 * Class representation for the financial planning/gambling program
 * 
 * @file UI.java
 * @auther ABM
 */
public class UI extends JFrame {

    /** Default serial version ID */
    private static final long serialVersionUID = 1L;

    /**
     * Main method. Constructs the UI.
     * @param args Command line arguments (not used)
     */
    public static void main(String[] args) {
        new UI();
    }

    /**
     * Constructor for the UI class. Sets the window name and initializes the GUI.
     */
    public UI() {
        super("Financial Planning/Gambling Program");
        this.initGUI();
    }
    /**
     * Handles GUI initialization.
     */
    private void initGUI() {
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setSize(800, 600);
        this.setVisible(true);
    }
}

