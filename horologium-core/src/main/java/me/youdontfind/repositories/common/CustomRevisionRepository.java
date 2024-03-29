package me.youdontfind.repositories.common;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.io.Serializable;

@NoRepositoryBean
public interface CustomRevisionRepository<T extends Object, ID extends Serializable> extends JpaRepository<T, ID> {

    Page<T> findAll(T filterObj, Pageable pageable);
}
