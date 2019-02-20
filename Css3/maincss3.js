function insert(num){
            document.form.view.value = document.form.view.value + num
        }
        function equal(){
            var result = document.form.view.value;
            if (result){
                document.form.view.value = eval(result)
            }
        }
        function clean(){
            document.form.view.value = "";
        }
        function back(){
            var result = document.form.view.value;
            document.form.view.value = result.substring(0,result.length-1);
}