/**
 * @swagger
 * tags:
 *   name: UserDetails
 *   description: User details management
 */

/**
 * @swagger
 * /userDetails:
 *   post:
 *     summary: Create user details
 *     tags: [UserDetails]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               dateOfBirth:
 *                 type: string
 *               gender:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: object
 *                 properties:
 *                   street:
 *                     type: string
 *                   city:
 *                     type: string
 *                   state:
 *                     type: string
 *                   postalCode:
 *                     type: string
 *                   country:
 *                     type: string
 *               profilePicture:
 *                 type: string
 *               preferences:
 *                 type: object
 *                 properties:
 *                   language:
 *                     type: string
 *                   currency:
 *                     type: string
 *               online_id:
 *                 type: string
 *               online_status:
 *                 type: integer
 *               about:
 *                 type: string
 *     responses:
 *       201:
 *         description: User details created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
