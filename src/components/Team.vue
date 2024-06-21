<template>
    <div class="team">
        <div class="team-member table">
            <div class="table-header table-row">
                <div class="table-col">Name</div>
                <div class="table-col">Email</div>
                <div class="table-col table-actions">Actions</div>
            </div>
            <div class="member table-row">
                <div class="table-col name">Le Linh Tien</div>
                <div class="table-col email">lelinhtien@gmail.com</div>
                <div class="table-col actions">
                    <div class="button-group group-end">
                        <div class="button button-small button-update">Update</div>
                        <div class="button button-small button-alert">Delete</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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