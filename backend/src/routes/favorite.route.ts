import { Router } from "express";
import { FavoriteController } from '../controllers/favorite.controller';

const favoriteController = new FavoriteController()

const router = Router()

router.post('/', (req, res) => favoriteController.createFavorite(req, res))

router.get('/', (req, res) => favoriteController.getAllFavorites(req, res))

router.get('/:id', (req, res) => favoriteController.getFavoriteById(req, res))

router.put('/:id', (req, res) => favoriteController.updateFavorite(req, res))

router.delete('/:id', (req, res) => favoriteController.deleteFavorite(req, res))

router.delete('/', (req, res) => favoriteController.deleteAllFavorites(req, res))

export default router
