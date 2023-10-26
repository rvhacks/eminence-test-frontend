import moment from "moment";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

const getUniqueDeviceId = () => {
  let deviceId = localStorage.getItem("deviceId");

  if (!deviceId) {
    deviceId = uuid();
    localStorage.setItem("deviceId", deviceId);
  }

  return deviceId;
};

export function cleanObject(obj) {
  const cleanedObj = { ...obj }; // create a copy of the object to avoid mutating the original object
  for (let key in cleanedObj) {
    if (
      cleanedObj[key] === "" ||
      cleanedObj[key] === " " ||
      cleanedObj[key] === [] ||
      /^\s+$/.test(cleanedObj[key])
    ) {
      delete cleanedObj[key];
    }
  }
  return cleanedObj;
  // const cleanedPayload = cleanObject(complainPayload);
}

export default {
  getUniqueDeviceId,
};
