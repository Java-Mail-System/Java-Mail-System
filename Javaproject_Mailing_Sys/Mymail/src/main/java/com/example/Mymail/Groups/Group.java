package com.example.Mymail.Groups;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
@Data
@Document
public class Group {
    @Id
    private String id;
    private String groupname;
    private String groupid;
    private List<String> mailids;

    public Group(String groupname, String groupid,ArrayList<String> mailids) {
        this.groupname = groupname;
        this.groupid = groupid;
        this.mailids = mailids;
    }

    public void setMailids(String mailid) {
        this.mailids.add(mailid);
    }

    public String getId() {
        return id;
    }

    public String getGroupid() {
        return groupid;
    }

    public String getGroupname() {
        return groupname;
    }

//    public void setGroupname(String groupname) {
//        this.groupname = groupname;
//    }

//    public void setGroupid(String groupid) {
//        this.groupid = groupid;
//    }

    public List<String> getMailids() {
        return mailids;
    }

//    public void setMailids(List<String> mailids) {
//        this.mailids = mailids;
//    }
}
