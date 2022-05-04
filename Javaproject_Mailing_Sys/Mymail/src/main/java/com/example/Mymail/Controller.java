package com.example.Mymail;


import com.example.Mymail.Groups.Group;
import com.example.Mymail.Mailbody.Mail;
import com.example.Mymail.User.User;
import com.example.Mymail.User.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Component
public class Controller {
    @Autowired
    private Model model;

    public Boolean loginHandler(String data)
    {
        return model.LoginUser(data);

    }

    public Boolean registerHandler(String data)
    {
       // System.out.println(data);
        return model.RegisterUser(data);
    }

    public Boolean composeHandler(String data)
    {
        return model.addEmail(data);
    }


    public List<Mail> getInbox(String email)
    {


        return model.inboxHandler(email);
    }

    public List<Mail> getSent(String email)
    {


        return model.getSent(email);
    }

    public List<Group> getGroups(String email)
    {
        return model.getGroups(email);
    }
    public boolean createGroup(String data)
    {
        return model.createGroup(data);
    }

    public boolean deleteHandler(String data)
    {
        return model.deleteHandler(data);
    }

    public void addMail(String data)
    {
        model.addMail(data);
    }
}
