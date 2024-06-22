<template>
    <div class="user-form">
        <!-- tạo hiệu ứng nền hoặc làm mờ nền khi form được hiển thị -->
        <div class="form-overlay" @click="() => toggleForm()"></div>
        <!-- không reload trang và gọi phương thức -->
        <form class="form" @submit.prevent="">
            <h3>User Form</h3>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" class="form-control">
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="form-control">
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control">
            </div>

            <input type="submit" value="Add" class="button">
        </form>
    </div>
</template>

<script>
export default {
    props: ["toggleForm"]
}
</script>

<style>
.user-form {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
}

.user-form .form-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.6);
}

.user-form .form {
    position: relative;
    z-index: 1;
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    width: 100%;
    max-width: 480px;
}

.user-form .form h3 {
    color: var(--dark);
    font-size: 28px;
    margin-bottom: 16px;
}

.form-group {
    display: block;
    margin-bottom: 16px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: var(--dark);
}

.form-control {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    color: var(--dark);
    background-color: #f9f9f9;
}

.form-control:focus {
    outline: none;
    border-color: #007BFF;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.button {
    display: flex;
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: var(--primary);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: var(--primary-alt);
}
</style>