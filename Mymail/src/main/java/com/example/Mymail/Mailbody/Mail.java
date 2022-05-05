package com.example.Mymail.Mailbody;

import jdk.jfr.DataAmount;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.web.multipart.MultipartFile;

@Data
@Document
public class Mail {
    @Id
    private String id;

    private String fromemail;
    private String toemail;
    private String subject;
    private String body;

    public Mail(String fromemail, String toemail, String subject, String body) {
        this.fromemail = fromemail;
        this.toemail = toemail;
        this.subject = subject;
        this.body = body;
    }

    public String getFromemail() {
        return fromemail;
    }

    public void setFromemail(String fromemail) {
        this.fromemail = fromemail;
    }

    public String getToemail() {
        return toemail;
    }

    public void setToemail(String toemail) {
        this.toemail = toemail;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
}
