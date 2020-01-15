import wrapPromise from "../utils/wrapPromise";
import axios from "axios";
import config from "../config";

const pendingEndpoint = config.apiEndpoints.pendingTodos;
const completedEndpoint = config.apiEndpoints.completedTodos;

function fetchPendingTodos() {
  const promise = axios
    .get(pendingEndpoint)
    .then(response => response.data?.data);
  return wrapPromise(promise);
}

function fetchCompletedTodos() {
  const promise = axios
    .get(completedEndpoint)
    .then(response => response.data?.data);
  return wrapPromise(promise);
}

export { fetchPendingTodos, fetchCompletedTodos };
