import Table from "../../components/ui/Table/Table";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function MyBids() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/bids?email=${user.email}`)
        .then((response) => setBids(response.data));
    }
  }, [user?.email, axiosSecure]);

  const handleRemoveBid = async (bidId) => {
    setBids((prevBids) => prevBids.filter((bid) => bid._id !== bidId));

    try {
      const { data } = await axiosSecure.delete(`/bids/${bidId}`);

      if (data.deletedCount > 0) {
        toast.success("Bid removed successfully!");
      } else {
        throw new Error("Bid not found or already deleted!");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to remove bid!";
      toast.error(errorMessage);
    }
  };

  return (
    <section>
      <h2 className="mt-20 mb-10 font-bold text-5xl text-primary text-center">
        My Bids: <span className="text-secondary">{bids.length}</span>
      </h2>
      <section className="px-20 mb-20">
        <Table bids={bids} status={true} handleRemoveBid={handleRemoveBid} />
      </section>
    </section>
  );
}

export default MyBids;
