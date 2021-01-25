function DanhSachTask() {
    this.arr = [];

    this.addTask = function(task){
        this.arr.push(task);
    };

    this._deleteTask = function(id){
        for(var i=0; i < this.arr.length; i++){
            if(this.arr[i].id === id){
                this.arr.splice(i, 1);
                break;
            }
        }
    };

    this.findIndex = function(id){
        var viTri = -1;
        for(var i=0; i<this.arr.length; i++){
            if(this.arr[i].id === id){
                viTri = i;
                break;
            }
        }
        return viTri;
    };

    this.getTaskById = function(id){
        var viTri = this.findIndex(id);
        if(viTri !== -1){
            return this.arr[viTri];
        }
    };

    this.updateTask = function(task){
        var viTri = this.findIndex(task.id);
        if(viTri !== -1){
            this.arr[viTri] = task;
        }
    };

}