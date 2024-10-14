import { Request, Response } from "express";
import { OfferService } from "../services/offer.service";
import { CreateOfferDto } from "../dto/offer.dto";

const offerService = new OfferService()

export class OfferController {

    public async createOffer(req: Request, res: Response): Promise<void> {
        try {
            const createOfferDto: CreateOfferDto = req.body
            const offer = await offerService.create(createOfferDto)
            res.status(201).json(offer)
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

    public async getAllOffers(req: Request, res: Response): Promise<void> {
        try {
            const offers = await offerService.getAll()
            res.status(200).json(offers)
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }

    public async getOfferById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id)
            const offer = await offerService.getById(id)
            if (!offer) {
                res.status(404).json({ message: 'Offer not found' })
            }
            res.status(200).json(offer)
        } catch (error: any) {
            res.status(400).json({ message: error.message })
        }
    }
}
