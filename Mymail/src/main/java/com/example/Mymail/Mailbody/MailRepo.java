package com.example.Mymail.Mailbody;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface MailRepo extends MongoRepository<Mail,String> {
}
