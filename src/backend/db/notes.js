import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Notes Database can be added here.
 * You can add notes of your wish with different attributes
 * */

export const notes = [
  {
    _id: uuid(),
    title: "Abstract New1",
    content: "Rachel Green1",
    state: 'ARCHIVED',
    pinned: true,
    label: 'Work',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: "Abstract New2",
    content: "Rachel Green2",
    state: 'ARCHIVED',
    pinned: true,
    label: 'Work',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: "Abstract New2",
    content: "Rachel Green2",
    state: 'CREATED',
    pinned: false,
    label: 'Work',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    title: "Abstract New2",
    content: "Rachel Green2",
    state: 'DELETED',
    pinned: false,
    label: 'Work',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
]