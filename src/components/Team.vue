<template>
    <div class="team">
        <!-- v-if dk lập mảng users -->
        <div class="team-member table" v-if="users.length > 0">
            <div class="table-header table-row">
                <div class="table-col">Name</div>
                <div class="table-col">Email</div>
                <div class="table-col table-actions">Actions</div>
            </div>
            <div class="member table-row" v-for="user in users" :key="user.id">
                <div class=" table-col name">{{ user.name }}</div>
                <div class="table-col email">{{ user.email }}</div>
                <div class="table-col actions">
                    <div class="button-group group-end">
                        <div class="button button-small button-update">Update</div>
                        <div class="button button-small button-alert">Delete</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="no-team" v-else>
            <p>No team available</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["users"] // nhập props đã được truyền từ app
}
</script>

<style>
.team {
    padding: 16px;
}

.table-row {
    display: flex;
    align-items: center;
}

.table-col {
    flex: 1 1 33.333%;
    padding: 16px;
    color: var(--grey);
}

.table-row {
    background-color: #fff;
}

.table-row:nth-child(2n+1) {
    background-color: var(--light-alt);
}

.table .table-header {
    background-color: var(--dark);
}

.table .table-header .table-col {
    color: var(--light);
}

.table-actions {
    text-align: right;
}

.button-update {
    background-color: green !important;
}
</style>