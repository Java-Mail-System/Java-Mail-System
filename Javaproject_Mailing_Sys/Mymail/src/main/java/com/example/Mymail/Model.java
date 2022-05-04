package com.example.Mymail;

import com.example.Mymail.Groups.Group;
import com.example.Mymail.Groups.GroupRepo;
import com.example.Mymail.Mailbody.Mail;
import com.example.Mymail.Mailbody.MailRepo;
import com.example.Mymail.User.User;
import com.example.Mymail.User.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Component;



import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static java.lang.System.*;

@Component
public class Model {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private MailRepo mailRepo;
    @Autowired
    private GroupRepo groupRepo;
    public Boolean LoginUser(String data)
    {


        //data has only email and password
        data = data.substring(1,data.length()-1);

        String[] entries = data.split(",");
        List<String > record  = new ArrayList<String>();
        for(String entry : entries)
        {
            String[] keyValue = entry.split(":");
            record.add(keyValue[1]);

        }
        List<User> u = userRepo.findAll();

        for(User x : u)
        {

            String email = x.getEmail();
            String password = x.getPassword();

           if(Objects.equals(email, record.get(0)))
           {
               if(Objects.equals(password, record.get(1)))
               {
                   return true;
               }
           }
        }
        return false;

    }
    public Boolean RegisterUser(String data)
    {

        data = data.substring(1,data.length()-1);

        String[] entries = data.split(",");
        List<String > record  = new ArrayList<String>();
        for(String entry : entries)
        {
            String[] keyValue = entry.split(":");
            record.add(keyValue[1]);

        }
        List<User> u = userRepo.findAll();
        int flag = 0;
        for(User x : u)
        {
            if(Objects.equals(x.getEmail(), record.get(1)))
            {
                flag = 1;
                break;
            }
        }

        if(flag == 1)
        {
            return false;
        }


        String username = record.get(0);
        String email = record.get(1);
        String password = record.get(2);

        User user = new User(username,email,password);
        userRepo.insert(user);


        return true;

    }


    public boolean addEmail(String data)
    {
        //System.out.println(data);
        data = data.substring(1,data.length()-1);
        String[] entries = data.split(",");
        List<String > record  = new ArrayList<String>();
        for(String entry : entries)
        {
            String[] keyValue = entry.split(":");
            record.add(keyValue[1]);

        }


        String fromemail  = record.get(0);

        String toemail = record.get(1);

        String subject = record.get(2);

        String body = record.get(3);

        Mail mail = new Mail(fromemail,toemail,subject,body);

        mailRepo.insert(mail);
        return true;
    }


    public List<Mail> inboxHandler(String email)
    {
        //System.out.println(email);
      List<Mail> all = mailRepo.findAll();
      List<Mail> returnMails = new ArrayList<>();
     for(Mail mail : all)
     {
         //out.println(mail.getToemail());
            String thismail = mail.getToemail().substring(1,mail.getToemail().length()-1);
            if(email.equals(thismail))
            {
                //System.out.println(mail);
                returnMails.add(mail);
            }
     }

        return returnMails;
    }


    public List<Mail> getSent(String email)
    {
        //System.out.println(email);
        List<Mail> all = mailRepo.findAll();
        List<Mail> returnMails = new ArrayList<>();
        for(Mail mail : all)
        {
            //out.println(mail.getToemail());
            String thismail = mail.getFromemail().substring(1,mail.getFromemail().length()-1);
            if(email.equals(thismail))
            {
                //System.out.println(mail);
                returnMails.add(mail);
            }
        }

        return returnMails;
    }


    public List<Group> getGroups(String email)
    {
        email = "\"" + email + "\"";
        List<Group> all = groupRepo.findAll();
        List<Group> returnGroups = new ArrayList<>();
        for(Group group: all)
        {
            if(group.getMailids().contains(email))
            {
                returnGroups.add(group);
            }
        }
        return returnGroups;
    }
    public boolean deleteHandler(String data)
    {
        data = data.substring(1,data.length()-1);
        String id = data.split(":")[1];
        id = id.substring(1,id.length()-1);
        //System.out.println(id);
        mailRepo.deleteById(id);
        return true;
    }


    public boolean createGroup(String data)
    {
       // System.out.println(data);
        data = data.substring(1,data.length()-1);
        String [] record = data.split(",");
        List<String> entries = new ArrayList<String>();
        for(String entry : record)
        {
            entries.add(entry.split(":")[1]);
        }
        //System.out.println(entries);
        String groupName = entries.get(0);
        String  groupId = entries.get(1);
        String user1 = entries.get(2);
        ArrayList<String> maillist = new ArrayList<String>();
        maillist.add(user1);
        Group group = new Group(groupName,groupId,maillist);
        //System.out.println(user1);

        groupRepo.insert(group);
        return true;
    }



    public void addMail(String data)
    {
        data = data.substring(1,data.length()-1);
        String[] entries = data.split(",");
        ArrayList<String> record = new ArrayList<String>();

        for(String entry : entries)
        {
            String email = entry.split(":")[1];
            record.add(email);
        }

        String groupid = record.get(0);
        String mailid = record.get(1);

//       out.println(groupid);
        //out.println(mailid);

        List<Group> all = groupRepo.findAll();
        for(Group group : all)
        {
            //System.out.println(group.getGroupid());
            if(Objects.equals(group.getGroupid(), groupid))
            {
                //System.out.println(group);
//                group.setMailids(mailid);
                ArrayList<String> nw = new ArrayList<String>();
                for(String id: group.getMailids())
                {
                    nw.add(id);
                }
                nw.add(mailid);
                Group newgrp = new Group(group.getGroupname(),group.getGroupid(),nw);
                groupRepo.insert(newgrp);
                groupRepo.deleteById(group.getId());
            }
        }
    }
}
