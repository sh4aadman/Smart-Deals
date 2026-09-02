import { format } from "date-fns";

const formatDate = (date) => {
  return format(new Date(date), "dd/MM/yyyy");
};

export { formatDate };
