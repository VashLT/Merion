// Multiplies R0 and R1 and stores the result in R2.
// (R0, R1, R2 refer to RAM[0], RAM[1], and RAM[2], respectively.)
//
// This program only needs to handle arguments that satisfy
// R0 >= 0, R1 >= 0, and R0*R1 < 32768.

@2	//GO TO R2 (RESULT)
M=0	//ZERO RESULT

@0	//GO TO R0
D=M
@SECONDIF
D;JGE	//IF R0 >= 0 GO TO SECOND IF

//ELSE
@END // GO TO END
0;JMP
//

(SECONDIF)
@1	//GO TO R1
D=M	
@START
D;JGE	//IF R1 >= 0 GO TO START

//ELSE
@END //GO TO END
0;JGE
//

(START)
@0	//GO TO R0
D=M
@NOTCHANGE
D;JNE	//IF R0 != 0 GO TO NOT CHANGE


//ELSE SPLIT VALUE OF R0 AND R1
@1 // GO TO R1
D=M // STORE VALUE OF R1

@0 // GO TO R0
A=M // STORE VALUE OF R0
M=D // STORE VALUE OF R1
D=A // STORE VALUE OF R0

@1 // GO TO R1
M=D // STORE VALUE OF R0
//


// STORE R0 VALUE ON R3 TO USE AS COUNTER
(NOTCHANGE)
@0	// GO TO R0
D=M	// STORE VALUE OF R0
@3	// GO TO R3
M=D	// STORE VALUE OF R0

(LOOP)
@1	// GO TO R1
D=M	// STORE VALUE OF R1

@2	//GO TO R2 (RESULT)
M=D+M //STORE IN R2 R2+R1

// R3 AS COUNTER
@3	// GO TO R3
M=M-1 // STORE VALUE OF R3-1

D=M	// STORE VALUE OF R3
@LOOP
D;JGT //IF R3 > 0 REPEAT

(END) // END/
@END
0;JMP	