/**
 * @swagger
 * tags:
 *   name: RoleAssignments
 *   description: Role assignment management
 */

/**
 * @swagger
 * /roleAssignments:
 *   post:
 *     summary: Assign a role to a user
 *     tags: [RoleAssignments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               roleId:
 *                 type: string
 *             required:
 *               - userId
 *               - roleId
 *     responses:
 *       200:
 *         description: Role assigned successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
