<template>
    <div class="container">
        <h2 class="mb-4">История моих покупок</h2>
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" v-for="receipt in receipts" :key="receipt">
                <receipt-card :receipt="receipt" />
            </div>
        </div>
    </div>
</template>

<script>
    import ReceiptCard from "@/components/ReceiptCard";
    import axios from "axios";

    export default {
        name: "RecentPage",
        data() {
            return {
                receipts: []
            };
        },
        components: {
            ReceiptCard
        },
        created() {
            axios.put("/api/receipts", {
                    limit: 12,
                    sort: "DATE",
                    asc: false
                })
                .then(result => {
                    this.receipts = result.data;
                });
        }
    };
</script>

<style scoped></style>
