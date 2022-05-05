package com.example.Mymail;


import com.example.Mymail.Groups.Group;
import com.example.Mymail.Mailbody.Mail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class View {
    @Autowired
    private Controller controller;



    @PostMapping(path = "/login")
    public Boolean loginCredentials(@RequestBody String data)
    {
        return controller.loginHandler(data);
    }


    @PostMapping(path = "/register")
    public Boolean signupcredentials(@RequestBody String data)
    {
        return controller.registerHandler(data);
    }

    @PostMapping(path = "/compose")
    public Boolean composeMail(@RequestBody String data)
    {
        //System.out.println(file.getClass().getSimpleName());
        return controller.composeHandler(data);

    }

    @GetMapping(path = "/inbox")
    public List<Mail> getInbox(@RequestParam("useremail") String email)
    {
        //System.out.println(email);

        return controller.getInbox(email);
    }

    @GetMapping(path = "/getgroups")
    public List<Group> getGroup(@RequestParam("useremail") String email)
    {
        return controller.getGroups(email);
    }


    @GetMapping(path = "/sent")
    public List<Mail> getSent(@RequestParam("useremail") String email)
    {
        //System.out.println(email);

        return controller.getSent(email);
    }

    @PostMapping(path = "/inbox/delete")
    public  boolean deleteEmail(@RequestBody String data)
    {
        return controller.deleteHandler(data);
    }

    @PostMapping(path="/groups")
    public boolean createGroup(@RequestBody String data)
    {
        return controller.createGroup(data);
    }


    @PostMapping(path = "/groups/add")
    public void addMail(@RequestBody String data)
    {
        controller.addMail(data);
    }
}
