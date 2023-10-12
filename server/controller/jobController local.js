import { nanoid } from 'nanoid';

let jobs = [
    {id: nanoid(10), company: "apple", position: "font-end"},
    {id: nanoid(10), company: "google", position: "back-end"},
    {id: nanoid(10), company: "microsoft", position: "AI"}
];

export const getAllJobs = async (req, res) => {
    res.json({jobs});
}

export const getSingleJob = async (req, res) => {
    const {id} = req.params;
    const job = jobs.find(job => job.id === id);
    if(!job){
        return res.status(404).json({msg: `no job with id ${id}`});
    }
    res.json({job});
}

export const createJob = async (req, res) => {
    const {company, position} = req.body;
    if(!company || !position){
        return res.status(400).json({msg: "create job fail"});
    }
    const job = {id: nanoid(10), company, position};
    jobs.push(job);
    res.json(job);
}

export const editJob = async (req, res) => {
    const {id} = req.params;
    const {company, position} = req.body;

    if(!company || !position){
        return res.status(400).json({msg: "please enter information"});
    }

    const job = jobs.find(job => job.id === id);
    if(!job){
        throw new Error('no job with that id');
        // return res.status(404).json({msg: `no job with id ${id}`});
    }

    job.company = company;
    job.position = position;
    res.json({job});
}

export const deleteJob = async (req, res) => {
    const {id} = req.params;
    const job = jobs.find(job => job.id === id);
    if(!job){
        return res.status(404).json({msg: `no job with id ${id}`});
    }
    jobs.filter(job => job.id !== id);
    res.status(200).json({msg: `deleted job with id ${id}`});
}