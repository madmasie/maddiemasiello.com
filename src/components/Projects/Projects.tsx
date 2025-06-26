import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Divider } from '@mui/material';
import ProjectInfo, { ProjectEntry } from './ProjectInfo';
import { PictureAsPdf } from '@mui/icons-material';

const projects: ProjectEntry[] = [

   {
    image: '/img/329cpboard.jpg',
    title: 'DSP Guitar Delay Pedal - "Repeat-inator"',
    description: (
      <>
        <div>
          The "Repeat-inator" is a custom-designed guitar effects pedal that applies a digital delay to an incoming audio signal, creating echo-like repetitions of the original sound.
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Signal Processing Chain</h3>
          <ul>
            <li>Analog guitar input signal conversion via STM32's built-in ADC</li>
            <li>Digital signal storage using circular buffer</li>
            <li>Delayed playback through external DAC</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>User Controls</h3>
          <ul>
            <li>Adjustable delay time via potentiometer</li>
            <li>Feedback control (number of repetitions)</li>
            <li>Dry/wet mix control (balance between original and delayed signals)</li>
            <li>True bypass button for direct signal routing</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Key Features</h3>
          <ul>
            <li>Real-time parameter adjustment</li>
            <li>Dynamic audio output behavior</li>
            <li>Low latency optimization</li>
            <li>High-fidelity audio performance</li>
            <li>Suitable for both live and studio use</li>
          </ul>
        </div>
      </>
    ),
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
    description: (
      <>
        <div>
          This project implements a 4-bit binary LED counter and instruction execution timing measurement system using the STM32L4A6ZG microcontroller.
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>LED Counter Implementation</h3>
          <ul>
            <li>4-bit binary counting from 0 to 15</li>
            <li>Visible delay between count transitions</li>
            <li>Oscilloscope-calibrated delay loop timing</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Instruction Timing Analysis</h3>
          <ul>
            <li>Execution timing measurements for:</li>
            <ul>
              <li>Various data types</li>
              <li>Different arithmetic operations</li>
            </ul>
            <li>Comprehensive timing results documentation</li>
            <li>Performance analysis and optimization</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          Complete source code and detailed timing data available in the project document.
        </div>
      </>
    ),
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
    description: (
      <>
        <div>
          This design project implements a keypad interface system using the STM32L4 microcontroller, featuring GPIO-based input detection and LED output display.
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Hardware Integration</h3>
          <ul>
            <li>3x4 matrix keypad connection to GPIO pins</li>
            <li>Four-LED output display system</li>
            <li>Efficient GPIO pin utilization</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Software Features</h3>
          <ul>
            <li>Polling-based keypress detection</li>
            <li>Software debounce implementation</li>
            <li>4-bit binary value conversion</li>
            <li>Real-time LED display updates</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>System Design</h3>
          <ul>
            <li>Modular keypad interface architecture</li>
            <li>Robust configuration system</li>
            <li>Efficient keypress detection algorithm</li>
            <li>Reliable input processing pipeline</li>
          </ul>
        </div>
      </>
    ),
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
    description: (
      <>
        <div>
          This project implements a digital countdown timer using an STM32 microcontroller, featuring user input through a keypad, visual output via LCD display, and LED feedback.
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Key Features</h3>
          <ul>
            <li>Time input in MM:SS format using keypad (right to left entry)</li>
            <li>Real-time LED feedback with once-per-second flash during countdown</li>
            <li>Special LED "dance" sequence at timer completion</li>
            <li>Comprehensive LCD display interface</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>System States</h3>
          <ul>
            <li>Greeting screen on startup</li>
            <li>Time input mode for setting countdown</li>
            <li>Active countdown state with visual feedback</li>
            <li>Completion state with animation</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Technical Highlights</h3>
          <ul>
            <li>Optimized delay functions for improved response time</li>
            <li>Precise timing implementation, especially for LCD operations</li>
            <li>Reliable star/reset button functionality with variable press timing</li>
            <li>Robust state management system</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          For complete implementation details and technical specifications, please refer to the "Countdown Timer Project Report" above.
        </div>
      </>
    ),
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
    description: (
      <>
        <div>
          This project features a high-precision reaction timer game built on the STM32L4 microcontroller, measuring user responses with millisecond accuracy.
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Hardware Setup</h3>
          <ul>
            <li>16x2 LCD display interface</li>
            <li>Onboard button for user input</li>
            <li>LED for visual signaling</li>
            <li>Hardware RNG module utilization</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Game Implementation</h3>
          <ul>
            <li>1ms precision timing system</li>
            <li>Randomized delay generation</li>
            <li>Real-time reaction measurement</li>
            <li>Automatic round reset functionality</li>
            <li>LCD-based result display</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Technical Architecture</h3>
          <ul>
            <li>Interrupt-driven state machine design</li>
            <li>Clean modular code structure</li>
            <li>Responsive timing implementation</li>
            <li>Efficient game loop management</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          Complete source code and implementation details available in the "Countdown Timer Project Report" above.
        </div>
      </>
    ),
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
    image: '/img/pipeline.png',
    title: ' Pipelined RISC-V CPU - Data Forwarding, Hazard Detection, and Control Handling',
    description: (
      <>
        <div>
          This project was implemented in CPE 333 (Computer Hardware Architecture and Design) at Cal Poly, and is a 5-stage pipelined OTTER RISC-V CPU with dynamic hazard handling, including full support for data forwarding, stall logic for load-use hazards, and flushing on control mispredictions.
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Implementation Details</h3>
          <ol>
            <li>
              <strong>Hazard Detection and Forwarding:</strong>
              <ul>
                <li>Implemented two hazard multiplexers (HazardMuxA and HazardMuxB) in the execute stage</li>
                <li>Enabled operand forwarding to avoid incorrect computation due to RAW hazards</li>
                <li>Hazard unit compares source and destination registers across pipeline stages</li>
                <li>Selects forwarded data from either MEM or WB stage when needed</li>
              </ul>
            </li>
            <li>
              <strong>Load-Use Hazard Handling:</strong>
              <ul>
                <li>Detects when a load instruction is followed by a dependent instruction</li>
                <li>Stalls the PC and decode stage</li>
                <li>Flushes the execute stage to prevent incorrect execution</li>
              </ul>
            </li>
            <li>
              <strong>Control Hazard Management:</strong>
              <ul>
                <li>Implemented static branch-not-taken predictor</li>
                <li>Corrected PC selection logic placement to execute stage</li>
                <li>Added actual_pc_selE computation based on instruction type (branch, JAL, JALR)</li>
                <li>Implemented flush logic to remove misfetched instructions</li>
              </ul>
            </li>
          </ol>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Verification and Performance</h3>
          <ul>
            <li>Waveform analysis confirmed:</li>
            <ul>
              <li>Correct forwarding paths in EX stage</li>
              <li>Proper stall insertion for load-use hazards</li>
              <li>Appropriate flushes and PC redirection for control mispredictions</li>
            </ul>
            <li>Performance comparison with multi-cycle implementation:</li>
            <ul>
              <li>Over 1 million times faster on 50x50 matrix multiplication benchmark</li>
              <li>93 mW total on-chip power consumption</li>
              <li>Maintained similar resource utilization</li>
            </ul>
          </ul>
        </div>
      </>
    ),
    details: {
      carouselImages: [ 
        {
          imageUrl: '/img/333FDDE.png',
          caption: 'Execute-to-Execute Forwarding: This waveform shows forwarding from the EX/MEM stage to the ALU inputs in the EX stage. The ForwardMuxA and ForwardMuxB signals are active (10), selecting the ALU result from the previous cycle. The ALU receives the correct values without stalling.', 
        },
        {
          imageUrl: '/img/333FEDE2.png',
          caption: 'Load-Use Hazard with Stall: This waveform displays the pipeline stalling correctly when a load instruction is followed by an instruction using its result. The StallF and StallD signals are high, and FlushE is triggered to prevent incorrect execution in the EX stage.', 
        },
        {
          imageUrl: '/img/333Hazards3.png',
          caption: 'Control Hazard with Branch Taken: This waveform demonstrates flushing after a mispredicted branch. The branch_takenE signal goes high in the EX stage, which activates FlushD and FlushE to clear the instructions fetched under the false branch-not-taken assumption. The PC is then updated to the correct branch target.', 
        },
      ],
      assets: [
        {
          icon: <PictureAsPdf />,
          title: 'RISC-V Pipelined OTTER with Hazards Source Code + Implementation Report',
          url: '/docs/333hazardspdf.pdf',
        }
      ],
    },
  },

  {
    image: '/img/333cachecover.png',
    title: ' Direct-Mapped L1 Instruction Cache for Pipelined OTTER MCU',
    description: (
      <>
        <div>
          This project implements a direct-mapped Level-1 (L1) instruction cache for our pipelined OTTER RISC-V CPU, developed in CPE 333 (Computer Hardware Architecture and Design) at Cal Poly.
        </div>
        
        <div style={{ marginTop: '1rem' }}>
          <h3>Key Specifications</h3>
          <ul>
            <li>Cache Organization: 16 blocks × 8 instructions per block (32-bit words)</li>
            <li>Block Size: 32 bytes total</li>
            <li>Addressing: Direct-mapped with tag + valid bit arrays</li>
            <li>Miss Penalty: One cycle NOP (0x13) + memory fetch time</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Implementation Details</h3>
          <ol>
            <li>
              <strong>Cache Module:</strong>
              <ul>
                <li>Tag tracking and comparison logic</li>
                <li>Critical tag update: tags[index] ⟸ pc_tag for block replacements</li>
                <li>Hit/miss detection with valid bit verification</li>
                <li>Word selection within cache blocks</li>
              </ul>
            </li>
            <li>
              <strong>State Machine (FSM):</strong>
              <ul>
                <li>ST_READ_CACHE: Normal operation with hit handling</li>
                <li>ST_READ_MEM: Miss handling with PC stall</li>
                <li>Automatic state transitions on block fetch completion</li>
              </ul>
            </li>
            <li>
              <strong>Pipeline Integration:</strong>
              <ul>
                <li>Modified IF/ID register and PC update logic</li>
                <li>Combined hazard handling (StallD, StallF) with Cache_stall</li>
                <li>NOP insertion during misses</li>
                <li>Cache-pipeline synchronization</li>
              </ul>
            </li>
          </ol>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Error Handling</h3>
          <ul>
            <li>Cache miss → Immediate pipeline stall</li>
            <li>Invalid cache state → Automatic flush</li>
            <li>Memory fetch failure → Recovery mechanism</li>
            <li>Cache coherency maintenance</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          Performance features and detailed implementation are documented in the project report.
        </div>
      </>
    ),

    details: {
      carouselImages: [ 
        {
          imageUrl: '/img/333cachecover.png',
          caption: 'Cache Miss Handling and FSM Behavior: This waveform shows a cache miss occurring (miss signal = 1), causing the FSM to transition to ST_READ_MEM. During this time, pc_stall is high, and the pipeline fetch stage is stalled. A NOP instruction is issued while a new block is loaded.', 
        },
        {
          imageUrl: '/img/333cache2.png',
          caption: 'Validity and Tag Update Confirmation: Here we observe the cache loading a new block on a miss. The update signal goes high, valid_bits[index] is set, and tags[index] is updated to match the PCs tag. On the next access, a hit occurs, showing the cache is functioning correctly.', 
        },
        {
          imageUrl: '/img/333cache3.png',
          caption: ' Normal Hit and Cache Read: In this case, the cache correctly identifies a hit (hit = 1, miss = 0). The pipeline fetches the instruction directly from the cache without stalling, and the FSM remains in ST_READ_CACHE. This confirms the fast-path read logic and cache responsiveness.', 
        },
      ],
      assets: [
        {
          icon: <PictureAsPdf />,
          title: 'RISC-V Pipelined OTTER with Hazards Source Code + Implementation Report',
          url: '/docs/333hazardspdf.pdf',
        }
      ],
    },
  },


  {
    image: '/img/329a5cover.png',
    title: 'Digital-to-analog converter (DAC) using the SPI (STM32L4 MCU & MCP4821 DAC)',
    description: (
      <>
        <div>
          This project demonstrates the integration of an STM32L4 microcontroller with an MCP4821 digital-to-analog converter using SPI communication protocol.
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Hardware Integration</h3>
          <ul>
            <li>STM32L4 microcontroller as main controller</li>
            <li>MCP4821 DAC for analog output</li>
            <li>4x3 matrix keypad for user input</li>
            <li>SPI communication interface</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Functionality</h3>
          <ul>
            <li>Real-time voltage output (0.00V to 3.30V)</li>
            <li>3-digit voltage value input</li>
            <li>12-bit DAC word conversion</li>
            <li>Input validation system</li>
            <li>Output voltage capping</li>
            <li>Reset functionality</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Verification</h3>
          <ul>
            <li>Logic analyzer testing</li>
            <li>Calibration for accuracy</li>
            <li>Comprehensive timing analysis</li>
            <li>Performance requirements validation</li>
          </ul>
        </div>
      </>
    ),
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
    image: '/img/329a7cover.png',
    title: 'UART Video Game - Treasure Hunt',
    description: (
      <>
        <div>
          This project explores UART communication implementation using GPIO pins on an embedded system, creating a terminal-based game interface between a microcontroller and computer.
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Technical Implementation</h3>
          <ul>
            <li>UART communication via GPIO alternate functions</li>
            <li>Terminal interface with character echo capability</li>
            <li>Terminal escape code formatting</li>
            <li>Two-stage development process:
              <ul>
                <li>Initial character echo testing phase</li>
                <li>Full game implementation stage</li>
              </ul>
            </li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Game Features</h3>
          <ul>
            <li>Interactive player movement controls</li>
            <li>Stick figure character design</li>
            <li>Screen-wrapping border mechanics</li>
            <li>Color-changing mechanics:
              <ul>
                <li>Multi-color player character</li>
                <li>Character turns red for 3 moves after collecting treasure</li>
              </ul>
            </li>
            <li>Solid border implementation</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Development Highlights</h3>
          <ul>
            <li>Bug-free implementation</li>
            <li>Practical experience with UART interface</li>
            <li>Terminal formatting with escape codes</li>
            <li>Real-world embedded systems communication</li>
          </ul>
        </div>
      </>
    ),
    details: {
      carouselImages: [

        
        {
          imageUrl: '/img/ee329a7pic.png',
          caption: 'Splash Screen Introduction of Treasure Hunt Game', 
        },
       
        
      ],
      assets: [
        {
          icon: <PictureAsPdf />,
          title: 'UART Project Report',
          url: '/docs/ee329a7pdf.pdf',
        }
      ],

      ytVideoId: 'hw2MHvnhOXY',
    },
  },

  
  {
    image: '/img/rgm-pic.png',
    title: 'Circuits Lab Rube Goldberg Machine',
    description: (
      <>
        <div>
          This project, developed during Circuits II lab at Cal Poly, implements an innovative Rube Goldberg-style machine combining multiple circuit segments into an interactive alarm system.
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Development Process</h3>
          <ul>
            <li>Week-by-week circuit segment implementation</li>
            <li>Iterative design and testing</li>
            <li>Component integration strategy</li>
            <li>Final showcase demonstration</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>System Features</h3>
          <ul>
            <li>Capacitive touch piano input</li>
            <li>Musical passcode system</li>
            <li>Multi-stage activation sequence</li>
            <li>LCD display output</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Technical Implementation</h3>
          <ul>
            <li>Circuit segment modularity</li>
            <li>Sequential trigger system</li>
            <li>Interactive user interface</li>
            <li>Creative alarm functionality</li>
          </ul>
        </div>
      </>
    ),
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
        <div>
          This project, developed in EE 307/EE 347 Lab (Semiconductor Device Electronics) at Cal Poly, focuses on designing and implementing custom interfaces between different digital logic technologies.
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Technologies Explored</h3>
          <ul>
            <li>Positive Emitter-Coupled Logic (PECL)</li>
            <li>Transistor-Transistor Logic (TTL)</li>
            <li>Complementary Metal-Oxide-Semiconductor (CMOS)</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Implementation Details</h3>
          <ul>
            <li>Custom PECL OR-NOR gate construction</li>
            <li>TTL to PECL interface design</li>
            <li>PECL to CMOS integration</li>
            <li>Circuit analysis and optimization</li>
          </ul>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h3>Project Outcomes</h3>
          <ul>
            <li>Successful multi-technology integration</li>
            <li>Practical digital logic implementation</li>
            <li>Custom interface validation</li>
            <li>Comprehensive circuit documentation</li>
          </ul>
        </div>
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
    image: '/img/cpe333lab1cover.png',
    title: 'Matrix Multiplication in RISC-V Assembly Project',
    description:
      'This project was implemented in CPE 333 (Computer Hardware Architecture and Design) at Cal Poly, and is a matrix-matrix multiplication algorithm entirely in RISC-V assembly language. The primary goal was to deepen our understanding of low-level programming, stack operations, and the RISC-V calling convention while applying a fundamental linear algebra operation used widely in engineering and computer science. We wrote an assembly routine to multiply two square matrices (e.g., 3x3 up to 50x50), following the standard algorithm: multiplying each row of matrix A with each column of matrix B and summing the products to compute the resulting matrix C. This was done using nested loops and careful management of memory through the stack.After implementing the algorithm, we verified the output by comparing our results to those generated by an online matrix calculator, ensuring correctness with automated diff checks. This project reinforced key concepts in assembly programming and algorithm implementation and provided hands-on experience with mathematical computation at the instruction level.',
    details: {
      
      assets: [
        {
          icon: <PictureAsPdf />,
          title: 'Matrix Multiplication Important Source Code + Proof',
          url: '/docs/cpe333lab1pdf.pdf',
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
