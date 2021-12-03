/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: PID_CONTROLLER.c
 *
 * Code generated for Simulink model 'PID_CONTROLLER'.
 *
 * Model version                  : 1.43
 * Simulink Coder version         : 9.6 (R2021b) 14-May-2021
 * C/C++ source code generated on : Fri Dec  3 20:03:18 2021
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objective: RAM efficiency
 * Validation result: Not run
 */

#include "PID_CONTROLLER.h"
#include "PID_CONTROLLER_private.h"

/* Block signals and states (default storage) */
DW_PID_CONTROLLER_T PID_CONTROLLER_DW;

/* External inputs (root inport signals with default storage) */
ExtU_PID_CONTROLLER_T PID_CONTROLLER_U;

/* External outputs (root outports fed by signals with default storage) */
ExtY_PID_CONTROLLER_T PID_CONTROLLER_Y;

/* Model step function */
void PID_CONTROLLER_step(void)
{
  /* Sum: '<Root>/Sum' incorporates:
   *  Gain: '<Root>/Intregal_Gain'
   *  Gain: '<Root>/Time'
   *  Inport: '<Root>/ek'
   *  UnitDelay: '<Root>/Unit Delay'
   */
  PID_CONTROLLER_DW.UnitDelay_DSTATE += 40.0 * PID_CONTROLLER_U.ek * 0.01;

  /* Saturate: '<Root>/Sat_I' */
  if (PID_CONTROLLER_DW.UnitDelay_DSTATE > 7000.0) {
    /* Sum: '<Root>/Sum' */
    PID_CONTROLLER_DW.UnitDelay_DSTATE = 7000.0;
  } else if (PID_CONTROLLER_DW.UnitDelay_DSTATE < 0.0) {
    /* Sum: '<Root>/Sum' */
    PID_CONTROLLER_DW.UnitDelay_DSTATE = 0.0;
  }

  /* End of Saturate: '<Root>/Sat_I' */

  /* Outport: '<Root>/Con_Output' incorporates:
   *  Gain: '<Root>/Proportional_Gain'
   *  Inport: '<Root>/ek'
   *  Sum: '<Root>/Sum1'
   *  UnitDelay: '<Root>/Unit Delay'
   */
  PID_CONTROLLER_Y.Con_Output = 800.0 * PID_CONTROLLER_U.ek +
    PID_CONTROLLER_DW.UnitDelay_DSTATE;

  /* Update for UnitDelay: '<Root>/Unit_Delay_D' incorporates:
   *  Inport: '<Root>/ek'
   */
  PID_CONTROLLER_DW.Unit_Delay_D_DSTATE = PID_CONTROLLER_U.ek;
}

/* Model initialize function */
void PID_CONTROLLER_initialize(void)
{
  /* (no initialization code required) */
}

/* Model terminate function */
void PID_CONTROLLER_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
