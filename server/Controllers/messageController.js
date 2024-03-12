const messageModel = require('../Models/messageModel');

const createMessage = async (req, res) => { 
  const { chatId, sendId, text } = req.body;
  const newMessage = new messageModel({ chatId, sendId, text });
  try {
    const response = await newMessage.save();
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

const getMessages = async (req, res) => { 
  const { chatId } = req.params;
  try {
    const response = await messageModel.find({ chatId });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

module.exports = { createMessage, getMessages };