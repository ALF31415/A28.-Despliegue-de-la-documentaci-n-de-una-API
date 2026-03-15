let express = require("express");
let router = express.Router();
let BicicletaControllerAPI = require("../../controllers/api/BicicletaControllerAPI");

/**
 * @swagger
 * components:
 *   schemas:
 *     Bicicleta:
 *       type: object
 *       required:
 *         - id
 *         - color
 *         - modelo
 *         - latitud
 *         - longitud
 *       properties:
 *         id:
 *           type: integer
 *           description: id de la bicicleta
 *         color:
 *           type: string
 *           description: color de la bicicleta
 *         modelo:
 *           type: string
 *           description: modelo de la bicicleta
 *         latitud:
 *           type: number
 *           format: float
 *           description: latitud de la ubicacion
 *         longitud:
 *           type: number
 *           format: float
 *           description: longitud de la ubicacion
 *         ubicacion:
 *           type: array
 *           description: ubicacion guardada como array [latitud, longitud]
 *           items:
 *             type: number
 *       example:
 *         id: 1
 *         color: rojo
 *         modelo: Trek
 *         latitud: 28.503789
 *         longitud: -13.853296
 *         ubicacion: [28.503789, -13.853296]
 */

/**
 * @swagger
 * tags:
 *   name: Bicicletas
 *   description: API para gestionar bicicletas
 */

/**
 * @swagger
 * /api/bicicletas:
 *   get:
 *     summary: listar todas las bicicletas
 *     tags: [Bicicletas]
 *     responses:
 *       200:
 *         description: lista de bicicletas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bicicletas:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Bicicleta'
 */
router.get("/", BicicletaControllerAPI.bicicleta_list);

/**
 * @swagger
 * /api/bicicletas:
 *   post:
 *     summary: crear una bicicleta
 *     tags: [Bicicletas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       201:
 *         description: bicicleta creada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bicicleta:
 *                   $ref: '#/components/schemas/Bicicleta'
 *       400:
 *         description: datos invalidos
 */
router.post("/", BicicletaControllerAPI.bicicleta_create);

/**
 * @swagger
 * /api/bicicletas/{id}:
 *   put:
 *     summary: actualizar una bicicleta por id
 *     tags: [Bicicletas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: id de la bicicleta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               color:
 *                 type: string
 *               modelo:
 *                 type: string
 *               latitud:
 *                 type: number
 *               longitud:
 *                 type: number
 *     responses:
 *       200:
 *         description: bicicleta actualizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 bicicleta:
 *                   $ref: '#/components/schemas/Bicicleta'
 *       400:
 *         description: falta el id
 *       404:
 *         description: bicicleta no encontrada
 */
router.put("/:id", BicicletaControllerAPI.bicicleta_update);

/**
 * @swagger
 * /api/bicicletas/{id}:
 *   delete:
 *     summary: eliminar una bicicleta por id
 *     tags: [Bicicletas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: id de la bicicleta
 *     responses:
 *       204:
 *         description: bicicleta eliminada correctamente
 *       404:
 *         description: bicicleta no encontrada
 */
router.delete("/:id", BicicletaControllerAPI.bicicleta_delete);

module.exports = router;