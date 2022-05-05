package com.example.Mymail.Groups;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface GroupRepo extends MongoRepository<Group,String> {
}
