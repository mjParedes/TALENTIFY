import { Router } from "express";
import { OfferController } from "../controllers/offer.controller";

const offerController = new OfferController()

const router = Router()

router.post('/', (req, res) => offerController.createOffer(req, res))

router.get('/', (req, res) => offerController.getAllOffers(req, res))

router.get('/:id', (req, res) => offerController.getOfferById(req, res))

router.put('/:id', (req, res) => offerController.updateOffer(req, res))

router.delete('/:id', (req, res) => offerController.deleteOffer(req, res))

export default router
