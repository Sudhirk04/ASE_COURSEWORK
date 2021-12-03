/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: PID_CONTROLLER.h
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

#ifndef RTW_HEADER_PID_CONTROLLER_h_
#define RTW_HEADER_PID_CONTROLLER_h_
#ifndef PID_CONTROLLER_COMMON_INCLUDES_
#define PID_CONTROLLER_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* PID_CONTROLLER_COMMON_INCLUDES_ */

#include "PID_CONTROLLER_types.h"

/* Macros for accessing real-time model data structure */

/* Block signals and states (default storage) for system '<Root>' */
typedef struct {
  real_T UnitDelay_DSTATE;             /* '<Root>/Unit Delay' */
  real_T Unit_Delay_D_DSTATE;          /* '<Root>/Unit_Delay_D' */
} DW_PID_CONTROLLER_T;

/* External inputs (root inport signals with default storage) */
typedef struct {
  real_T ek;                           /* '<Root>/ek' */
} ExtU_PID_CONTROLLER_T;

/* External outputs (root outports fed by signals with default storage) */
typedef struct {
  real_T Con_Output;                   /* '<Root>/Con_Output' */
} ExtY_PID_CONTROLLER_T;

/* Block signals and states (default storage) */
extern DW_PID_CONTROLLER_T PID_CONTROLLER_DW;

/* External inputs (root inport signals with default storage) */
extern ExtU_PID_CONTROLLER_T PID_CONTROLLER_U;

/* External outputs (root outports fed by signals with default storage) */
extern ExtY_PID_CONTROLLER_T PID_CONTROLLER_Y;

/* Model entry point functions */
extern void PID_CONTROLLER_initialize(void);
extern void PID_CONTROLLER_step(void);
extern void PID_CONTROLLER_terminate(void);

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'PID_CONTROLLER'
 */
#endif                                 /* RTW_HEADER_PID_CONTROLLER_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
