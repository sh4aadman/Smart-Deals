import Table from "../../components/ui/Table/Table";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth Context/AuthProvider";
import { toast } from "sonner";
import axios from "axios";

function MyBids() {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/bids?email=${user.email}`)
        .then((response) => setBids(response.data));
    }
  }, [user]);

  const handleRemoveBid = async (bidId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/bids/${bidId}`,
      );

      if (data.deletedCount > 0) {
        setBids((prevBids) => prevBids.filter((bid) => bid._id !== bidId));
        toast.success("Bid removed successfully!");
      }
    } catch (error) {
      toast.error(`Failed to remove bid! ${error.message}`);
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
