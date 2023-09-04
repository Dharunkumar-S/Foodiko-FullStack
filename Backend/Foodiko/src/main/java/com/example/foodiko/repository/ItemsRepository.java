package com.example.foodiko.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.foodiko.model.Items;

@Repository
public interface ItemsRepository extends JpaRepository<Items, Integer>{
	
	//positional parameter
	@Query("select i from Items i where i.name=?1")
	public Items getItemByName(String name);
	
	@Modifying
	@Query("update Items i set i.price=?1 where i.name=?2")
	public int updatePriceByName(String price,String name);
	
	//named parameter
	@Modifying
	@Query("delete from Items i where i.name=:name")
	public int deleteByName(String name);
	
	//MySql query using native query
	@Query(value="select * from Items i where i.rating>=?",nativeQuery=true)
	public List<Items> getItemsByRating(String rating);
}
