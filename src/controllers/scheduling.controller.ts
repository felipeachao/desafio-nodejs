import { Request, Response } from "express";
import { SchedulingModel } from "../models/models";

export const createScheduling = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email } = req.body;
    const scheduling = await SchedulingModel.create({ name, email });
    res.status(201).json(scheduling);
  } catch (error) {
    console.error(error);
    res.status(500).send("error when creating schedule");
  }
};

export const listScheduling = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const schedulings = await SchedulingModel.findAll();
    res.status(200).json(schedulings);
  } catch (error) {
    console.error(error);
    res.status(500).send("error when listing schedule");
  }
};

export const deleteScheduling = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedCount = await SchedulingModel.destroy({ where: { id } });
    if (deletedCount !== 1) {
      res.status(404).send("scheduling not found");
    }
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("error when deleting schedule");
  }
};
