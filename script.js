var arr = [
    'Lorem ipsum dolor <span>sit amet</span>, consectetur adipisicing elit. Eaque veniam tempora illum accusamus necessitatibus <span>dolore ab</span>, doloribus totam nemo vero.', 
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos natus dicta <span>pariatur</span> nihil modi nisi, possimus obcaecati, minus <span>illum fuga</span> placeat sunt quam molestias nemo.', 
    'Lorem ipsum dolor <span>sit amet</span> consectetur adipisicing elit. Maxime, nam! <span>Vel quos fuga</span> iusto dolore ex doloremque a sint, praesentium est <span>exercitationem</span> asperiores aspernatur dicta mollitia.', 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>Fugit delectus</span> quasi saepe quisquam, vitae libero, unde soluta eaque nemo <span>incidunt obcaecati</span> sequi aut est ad voluptate perspiciatis.'];


document.addEventListener("DOMContentLoaded", function () {
    let rand = Math.floor(Math.random()*arr.length);
    document.getElementById('text').innerHTML = arr[rand];
});