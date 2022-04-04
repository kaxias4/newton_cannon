function ShowGrid() {
    let is_checked = $("#show_grid").is(":checked");

    if(is_checked){
        $(".grid").show();
    }else{
        $(".grid").hide();
    }
}