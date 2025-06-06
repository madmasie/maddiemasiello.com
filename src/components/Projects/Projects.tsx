import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Divider } from '@mui/material';
import ProjectInfo, { ProjectEntry } from './ProjectInfo';
import { PictureAsPdf } from '@mui/icons-material';

const projects: ProjectEntry[] = [

   {
    image: '/img/329cpboard.jpg',
    title: 'DSP Guitar Delay Pedal - "Repeat-inator"',
    description:
      'The “Repeat-inator” is a custom-designed guitar effects pedal that applies a digital delay to an incoming audio signal. When a guitar is plugged into the input, the analog signal is converted into digital form by the STM32’s built-in ADC, stored temporarily using a circular buffer, and then played back after a delay period via an external DAC. This creates an echo-like repetition of the original sound. Users can adjust the delay time, the amount of feedback (how many times the sound repeats), and the dry/wet mix (balance between original and delayed signals) using potentiometers. These parameters are read in real-time and affect the behavior of the audio output dynamically. The system also features a true bypass button that lets users completely skip the delay effect, passing the guitar signal directly from input to output. The device is optimized for low latency and high-fidelity audio performance, tailored specifically for live or studio guitar use.',
    details: {
      carouselImages: [
        {
          imageUrl: '/img/329schematic.png',
          caption: 'Final DSP Guitar Delay Pedal Schematic',
        },
        {
          imageUrl: '/img/ee329inout.png',
          caption:
            'Steady State Input vs Output of Delay Effect with 1500hz Sin Wave Input (orange) and DAC Output (green)',
        },
      ],
      assets: [
        {
          icon: <PictureAsPdf />,
          title: 'EE 329 Capstone Project Report',
          url: '/docs/riscv-mcu.pdf',
        },
        {
          icon: <PictureAsPdf />,
          title: 'EE 329 Capstone Project Presentation Slides',
          url: '/docs/329presentation.pdf',
        },
      ],
      ytVideoId: 'Eqc3riIkbCI',
    },
  },

  {
    image: '/img/329a1cover.png',
    title: 'Binary LED Counter and Instruction Timer using STM32L4A6ZG Nucleo Board',
    description:
      'This project implements a 4-bit binary LED counter and an instruction execution timing measurement system using the STM32L4A6ZG microcontroller. The LED counter counts from 0 to 15 with a visible delay, and the oscilloscope was used to calibrate and measure the delay loop. Execution timing was measured for a range of data types and arithmetic operations, and results are summarized. All Source code and data can be found in the project document ',
    details: {
      carouselImages: [
        {
          imageUrl: '/img/ee329a1.png',
          caption: 'STM32L4A6ZG Nucleo Board Wiring Diagram',
        },
        {
          imageUrl: '/img/ee329a1timing.png',
          caption:
            'Execution Timing Measurement Results for Various Data Types and Operations',
        },
      ],
      assets: [
        {
          icon: <PictureAsPdf />,
          title: 'EE 329 Binary LED Counter and Instruction Timer Report',
          url: '/docs/ee329a1.pdf',
        }
      ],
      ytVideoId: 'mrWB2fJikeg',
    },
  },

  {
    image: '/img/329a2cover.png',
    title: 'Keypad Interface - STM32L4A6ZG Nucleo Board',
    description:
      'This design project implemented a keypad interface using the STM32L4 microcontroller. A 3x4 matrix keypad was connected to GPIO pins, and software was developed to detect and identify keypresses through polling. The keypad module was designed to include proper configuration, keypress detection, and software debounce functionality. Upon detecting a valid keypress, a corresponding 4-bit binary value was displayed using four LEDs ',
    details: {
      carouselImages: [
        {
          imageUrl: '/img/ee329a2schem.png',
          caption: 'STM32L4A6ZG Nucleo Board & Keypad Wiring Diagram',
        },
        
        {
          imageUrl: '/img/329a2main.png',
          caption:
            'Pseudo Code main operations for Keypad Interface',
        },
        
        {
          imageUrl: '/img/329a2debounce.png',
          caption:
            'Pseudo Code Debouunce operations for Keypad Interface',
        },
        
      ],
      assets: [
        {
          icon: <PictureAsPdf />,
          title: 'Keypad interface project report',
          url: '/docs/ee329a1.pdf',
        }

      

      ],

      ytVideoId: 'KWUofW2I2hs',
    },
  },
  {
    image: '/img/329a3cover.png',
    title: 'Digital Countdown Timer Game - STM32L4A6ZG Nucleo Board',
    description:
      'This project implements a digital countdown timer using an STM32 microcontroller, a keypad for time input, an LCD for display, and LEDs for visual feedback. Users input the countdown time in MM:SS format using the keypad, with digits entered from right to left. Once the timer starts, the LED flashes once per second during the countdown, and performs a "dance" sequence when the timer reaches zero. The system features multiple functional states, including a greeting screen, time input mode, active countdown, and completion state. Although the behavior of the star/reset button can vary depending on how quickly it is pressed, the system performs reliably. Additional attention was given to minimizing delay functions to improve response time, and throughout development, the importance of precise timing - especially when working with the LCD - was a key takeaway. Design details can be found in "Countdown Timer Project Report" above.',
    details: {
      carouselImages: [

        {
          imageUrl: '/img/329a3flow.png',
          caption:
            'Pseudo Code Flowchart',
        },
        {
          imageUrl: '/img/329a3wire.png',
          caption: 'MCU / keypad / LED wiring diagram ',
        },
      ],
      assets: [
        {
          icon: <PictureAsPdf />,
          title: 'Countdown Timer Project Report',
          url: '/docs/329a3doc.pdf',
        }
      ],

      ytVideoId: 'qgfxiS40R3U',
    },
  },

  {
    image: '/img/329a4.png',
    title: 'Digital Reaction Timer Game - STM32L4A6ZG Nucleo Board',
    description:
      'This project features a reaction timer game built on the STM32L4 microcontroller. The system uses a 16x2 LCD and onboard button/LED to measure user reaction time with 1ms accuracy. After the user initiates the game, a randomized delay triggers an LED signal, prompting the user to respond as quickly as possible. The LCD displays the reaction time, and the system automatically resets for the next round. The project features an interrupt-driven state machine, hardware RNG, and clean modular design for responsive and accurate timing. Project source code and design details can be found in the "Countdown Timer Project Report" above.',
    details: {
      carouselImages: [

        
        {
          imageUrl: '/img/329a4schem.png',
          caption: 'Reaction Timer Wiring Diagram', 
        },
        {
          imageUrl: '/img/329a4timing.png',
          caption: 'Theoretical 5kHz with 25% Duty Cycle Square Wave', 
        },
        
        {
          imageUrl: '/img/329a4clk.png',
          caption: 'ISR Execution  timing with MC0 Clock. Oscilloscope capture of PC0 (5 kHz output waveform) and PC1 (ISR timing pulse). PC1 briefly pulses high during each TIM2 interrupt (CCR1 compare match and ARR overflow), indicating ISR execution timing relative to the 5 kHz signal. ', 
        },
      ],
      assets: [
        {
          icon: <PictureAsPdf />,
          title: 'Countdown Timer Project Report',
          url: '/docs/329a3doc.pdf',
        }
      ],

      ytVideoId: 'AYW05r9xL4c',
    },
  },
  {
    image: '/img/329a5cover.png',
    title: 'Digital-to-analog converter (DAC) using the SPI (STM32L4 MCU & MCP4821 DAC)',
    description:
      'This project demonstrates the integration of an STM32L4 microcontroller with an MCP4821 digital-to-analog converter (DAC) using the SPI communication protocol. A 4x3 matrix keypad is used as user input to enter a 3-digit voltage value, which is then converted into a 12-bit DAC word and transmitted to the MCP4821. The system enables real-time voltage output from 0.00 V to 3.30 V, with input validation, output capping, and reset functionality. The implementation was verified using a logic analyzer and calibrated to meet specified accuracy requirements.',
    details: {
      carouselImages: [

        
        {
          imageUrl: '/img/329a5wire.png',
          caption: 'Reaction Timer Wiring Diagram', 
        },
        {
          imageUrl: '/img/329a5cover.png',
          caption: 'Logic Analyzer Timing Diagram for 0.5 V (top) and 1.5 V (bottom) – D0 = Clock Select, D1 = Clock, D2 = Vout, D3 = SDI.', 
        },
        {
          imageUrl: '/img/329a5cover2.png',
          caption: 'Logic Analyzer Timing Diagram for 0.5 V (top) and 1.5 V (bottom) – D0 = Clock Select, D1 = Clock, D2 = Vout, D3 = SDI.', 
        }
        
      ],
      assets: [
        {
          icon: <PictureAsPdf />,
          title: 'DAC Project Report',
          url: '/docs/329a5pdf.pdf',
        }
      ],

      ytVideoId: 'RLMiT1T3Tg0',
    },
  },
  
  {
    image: '/img/rgm-pic.png',
    title: 'Circuits Lab Rube Goldberg Machine',
    description:
      'This project was created during my Circuits II lab at Cal Poly. Each week, we designed and implemented a different segment of the circuit, building the project step by step. Each segment represents a different part of the circuit, as shown in the block diagram. We showcased our final design at the end of the quarter. Encouraged to be inventive, we designed a Rube Goldberg-style machine, triggered by a user entering a "passcode" by playing a combination of pitches on a capacitive touch piano. The sequence ends with an LCD display, serving as a creative alarm system.',
    details: {
      carouselImages: [
        {
          imageUrl: '/img/rgm-pic.png',
          caption: 'Final RGM Integration Design',
        },
        {
          imageUrl: '/img/rgm-block.png',
          caption: 'Block Diagram of RGM System',
        },
        {
          imageUrl: '/img/rgm-integration-1.png',
          caption:
            'Schematic of capacitive touch piano, metal detector, and strobe light component integration',
        },
        {
          imageUrl: '/img/rgm-integration-2.png',
          caption:
            'Schematic demonstrating high-level final integration design',
        },
      ],
      ytVideoId: 'BtPoyJl9gnM',
    },
  },

  

  {
    image: '/img/ee307.png',
    title: 'Digital Logic Interfacing Project',
    description: (
      <>
      This project was created in EE 307 / EE 347 Lab (Semiconductor Device Electronics) at Cal Poly.
      My group and I designed a custom interface for our designed circuits. Throughout the quarter, 
      we analyzed, designed, and constructed digital logic gates, focusing on Positive Emitter-Coupled 
      Logic (PECL), Transistor-Transistor Logic (TTL), and Complementary Metal-Oxide-Semiconductor (CMOS) technologies.
      The project involved building a PECL OR-NOR gate, interfacing TTL to PECL, and further integrating the PECL with the CMOS. 
      </>
    ),

      details: {
        carouselImages: [
          { 
            imageUrl: '/img/ee307schem.png',
            caption: 'Full interfacing circuit layout with custom interfacing schematic',
          },
          { 
            imageUrl: '/img/ee307schematic.png',
            caption: 'Final digital logic interfacing project schematic with custom interfacing',
          },
        ],
        ytVideoId: 'sQcK0NVclIU',
      },
  },

  {
    image: '/img/pendubot.png',
    title: 'Pendubot PID Controller Design',
    description: (
      <>
        This project was created in EE 302/EE 342 (Classical Control Systems) at
        Cal Poly. The Pendubot system consists of a motor, a pendulum arm, and
        sensors that measure the angles of both the rotor and the pendulum arm.
        By controlling the motor, the goal is to stabilize the pendulum in
        either the suspended or inverted position. My lab group:
        <ol type="a">
          <li>
            focused on the behavior of second-order systems by deriving transfer
            functions and analyzing the effects of poles and zeros on system
            responses,
          </li>
          <li>
            designed a single-input single-output (SISO) controller for the
            Pendulum angle,
          </li>
          <li>
            focused on the application of Root Locus methods to improve
            transient response behavior,
          </li>
          <li>
            designed and implemented a lead compensator to improve transient
            response, increase stability margins, and enhance overall system
            performance,
          </li>
          <li>
            designed a PID controller that effectively minimizes steady-state
            error while meeting transient response specifications,
          </li>
          <li>
            used two different tuning methods, Manuel and Ziegler-Nichols, to
            adjust the PID gains (Kp, Ki, and Kd) through simulations and
            hardware experiments
          </li>
          <li>
            utilized frequency response design methods to look at gain and phase
            margins to help us understand the stability of our system.
          </li>
        </ol>
      </>
    ),
    details: {
      carouselImages: [
        {
          imageUrl: '/img/pendubot-simulink.png',
          caption: 'Pendubot MATLAB Simulink Design',
        },
      ],
      
    },
  },

  {
    image: '/img/riscvmcu.png',
    title: 'RISC-V MCU',
    description:
      'This project was completed each week throughout CPE 233: Computer Design & Assembly Language Programming. Using previous knowledge and experience with digital logic & FSMs, I designed a basic CPU through Vivado for simulations & testing, using Assembly to represent the CPU on a Basys3 Board.',
    details: {
      carouselImages: [
        {
          imageUrl: '/img/riscvmcu.png',
          caption: 'Final RISC-V  MCU Block Diagram Design',
        },
      ],
      assets: [
        {
          icon: <PictureAsPdf />,
          title: 'RISC-V Code: Vivado & Assembly',
          url: '/docs/riscv-mcu.pdf',
        },
      ],
      ytVideoId: 'tcR1wvAflqQ',
    },
  },
];

export default function Projects() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Projects
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <ProjectInfo entries={projects} />
    </Container>
  );
}
