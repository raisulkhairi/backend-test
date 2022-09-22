const { findByIdAndUpdate } = require("../models/serviceModel");
const serviceModel = require("../models/serviceModel");

class serviceController {
  static async createNewService(req, res) {
    const {
      merk,
      motorcycle_type,
      owner,
      service_type,
      status,
      complaint,
      phone_number,
      cost,
    } = req.body;

    try {
      const result = await serviceModel.create({
        merk,
        motorcycle_type,
        owner,
        service_type,
        complaint,
        phone_number,
        status,
        cost,
      });

      if (!result) {
        return res.status(404).json("the service cannot be created");
      }

      res.status(200).json({ message: "service created", result });
    } catch (error) {
      res.status(402).json(error);
    }
  }

  static async getAll(req, res) {
    try {
      const result = await serviceModel.find();
      if (!result) {
        console.log("data not found");
      }
      res.status(200).json({ message: "success", result });
    } catch (error) {
      res.status(404).json(error);
    }
  }

  static async updateStatus(req, res) {
    const { _id } = req.params;
    const { status } = req.body;
    try {
      const result = await serviceModel.findByIdAndUpdate(_id, {status:status}, { new: true });
      console.log("result :", result);
      res.status(200).json({ message: "updated", result });

    } catch (error) {
      res.status(402).json({ message: "fail" });
    }
  }

  static async getById(req, res) {
    const { _id } = req.params;

    try {
      const result = await serviceModel.findById(_id);
      if (!result) {
        res.status(404).json({ message: "User Not Found" });
      }
      res.status(200).json({ message: "success", result });
    } catch (error) {
      res.status(402).json(error);
    }
  }

  static async findByStatus(req, res) {
    const { status } = req.body;
    try {
      const data = await serviceModel.find({
        status: { $regex: status, $options: "i" },
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(402).json({ message: error });
    }
  }

  static async deleteAll(req, res) {
    try {
      const result = await serviceModel.deleteMany();
      res.status(200).json({ message: "delete success", result });
    } catch (error) {
      res.status(402).json(error);
    }
  }
}
module.exports = serviceController;
