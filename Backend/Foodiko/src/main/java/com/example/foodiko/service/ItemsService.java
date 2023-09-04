package com.example.foodiko.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.example.foodiko.model.Items;
import com.example.foodiko.repository.ItemsRepository;

import jakarta.transaction.Transactional;

@Service
public class ItemsService {
	@Autowired
	ItemsRepository itemsRepo;

	public List<Items> getAll() {
		List<Items> itemsList = itemsRepo.findAll();
		return itemsList;
	}

	public Items save(Items f) {
		Items item = itemsRepo.save(f);
		return item;
	}

	public Items update(Items f, int id) {
		Optional<Items> optional = itemsRepo.findById(id);
		Items item = null;
		if (optional.isPresent()) {
			item = optional.get();
			itemsRepo.saveAndFlush(f);
		}
		return item;
	}

	public void delete(int id) {
		itemsRepo.deleteById(id);
	}

	public Items get(int id) {
		Items items = itemsRepo.findById(id).get();
		return items;
	}

	public List<Items> sort(String field) {
		return itemsRepo.findAll(Sort.by(field));
	}

	public List<Items> rsort(String field) {
		return itemsRepo.findAll(Sort.by(Direction.DESC, field));
	}

	public List<Items> paging(int offset, int pageSize) {
		Pageable paging = PageRequest.of(offset, pageSize);
		Page<Items> iData = itemsRepo.findAll(paging);
		List<Items> itemsList = iData.getContent();
		return itemsList;
	}

	public List<Items> pagingAndSorting(int offset, int pageSize, String field) {
		Pageable paging = PageRequest.of(offset, pageSize).withSort(Sort.by(field));
		Page<Items> iData = itemsRepo.findAll(paging);
		List<Items> itemsList = iData.getContent();
		return itemsList;
	}

	public List<Items> rpagingAndSorting(int offset, int pageSize, String field) {
		Pageable paging = PageRequest.of(offset, pageSize).withSort(Sort.by(Direction.DESC, field));
		Page<Items> iData = itemsRepo.findAll(paging);
		List<Items> itemsList = iData.getContent();
		return itemsList;
	}

	public List<Items> getItemsByRating(String rating) {
		List<Items> itemsList = itemsRepo.getItemsByRating(rating);
		return itemsList;
	}

	@Transactional
	public int updatePriceByName(String price, String name) {
		return itemsRepo.updatePriceByName(price, name);
	}

	@Transactional
	public int deleteByName(String name) {
		return itemsRepo.deleteByName(name);
	}

	public Items getItemByName(String name) {
		Items item = itemsRepo.getItemByName(name);
		return item;
	}

}
