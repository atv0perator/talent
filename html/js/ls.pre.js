var atv = new function () {

    this.fsGetList = function (target) {
        return "[\n" +
            "{\n" +
            "\"filename\": \"file1file1file1file1filefile1file1file1file1file\",\n" +
            "\"thumbnail\": \"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg\"\n" +
            "},\n" +
            "{\n" +
            "\"filename\": \"file2\",\n" +
            "\"thumbnail\": \"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg\"\n" +
            "},\n" +
            "{\n" +
            "\"filename\": \"file3\",\n" +
            "\"thumbnail\": \"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg\"\n" +
            "},\n" +
            "{\n" +
            "\"filename\": \"file4\",\n" +
            "\"thumbnail\": \"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg\"\n" +
            "},\n" +
            "{\n" +
            "\"filename\": \"file5\",\n" +
            "\"thumbnail\": \"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg\"\n" +
            "},\n" +
            "{\n" +
            "\"filename\": \"file6\",\n" +
            "\"thumbnail\": \"https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg\"\n" +
            "}\n" +
            "]\n";
        //return [
        //    {
        //        filename: "file1file1file1file1filefile1file1file1file1file",
        //        thumbnail: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"
        //    },
        //    {
        //        filename: "file2",
        //        thumbnail: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"
        //    },
        //    {
        //        filename: "file3",
        //        thumbnail: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"
        //    },
        //    {
        //        filename: "file4",
        //        thumbnail: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"
        //    },
        //    {
        //        filename: "file5",
        //        thumbnail: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"
        //    },
        //    {
        //        filename: "file6",
        //        thumbnail: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"
        //    }
        //];
    };

    this.fsTap = function (id, filename) {
        fileManager.rename(id, 'newnamenewnamenewnamenewnamenewnamenewname');
        //fileManager.cancel(id);
    };

    this.fsLongPress = function (id, filename) {
        fileManager.rename(id, 'new name');
    };
};
